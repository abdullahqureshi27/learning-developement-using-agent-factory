# routers/auth.py 
from core.cookies import set_auth_cookies
from core.jwt import create_access_token, create_refresh_token
from fastapi import APIRouter, Depends , HTTPException, status, Response
from pydantic import BaseModel, EmailStr 

from core.auth import  get_current_user, get_current_user_from_refresh_token   
from core.security import get_password_hash, verify_password
from models.user import User, UserCreate, UserRead
from core.database import get_db
from sqlmodel import Session, select

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str          # ← NEW
    token_type: str = "bearer"
    user: UserRead


@router.post("/register", response_model=UserRead)
async def register_user(
    user_data: UserCreate ,
    db: Session = Depends(get_db)
):
    existing = db.exec(select(User).where(User.email == user_data.email)).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password =get_password_hash(user_data.password)  # Use the hasher from core/security.py
    user = User(email=user_data.email, hashed_password=hashed_password, name=user_data.name) 
    # user.set_password(user_data.password) # Uses argon2id or bcrypt from settings

    db.add(user)
    db.commit()
    db.refresh(user)

    return user

@router.post("/login", response_model=TokenResponse)
async def login_for_access_token(
    form_data: LoginRequest,
    db: Session = Depends(get_db),
    response: Response = None,
):
    """Authenticate user and set JWTs in httpOnly cookies."""
    # Find user
    user = db.exec(select(User).where(User.email == form_data.email)).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Create JWT
    access_token = create_access_token(subject=user.id)

    refresh_token = create_refresh_token(subject=user.id)

    # Set httpOnly cookies
    # set_auth_cookies(response, access_token, refresh_token)

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        user=UserRead.model_validate(user)
    )


@router.post("/refresh", response_model=TokenResponse)
async def refresh_access_token(
    user: User = Depends(get_current_user_from_refresh_token),  # FastAPI handles token extraction + db
    response: Response = None,  
):
    print("Refreshing access token for user:", user)  # Debugging line
    """Use refresh token to get a new access token + new refresh token (rotation)."""
    new_access_token = create_access_token(subject=user.id)
    new_refresh_token = create_refresh_token(subject=user.id)   # rotation

    set_auth_cookies(response, new_access_token, new_refresh_token)

    return TokenResponse(
        access_token=new_access_token,
        refresh_token=new_refresh_token,
        user=UserRead.model_validate(user)
    )



# =============================
# @router.get("/me", response_model=UserRead)
# # async def read_users_me(current_user:User= Depends(get_current_user_from_cookie)):
# async def read_users_me(current_user:User= Depends(get_current_user)):
# # async def read_users_me(current_user:User= Depends(get_current_user_from_cookie)):
#     """Protected route - requires valid JWT"""
#     return current_user


@router.get("/me", response_model=User)
async def read_users_me(current_user:User= Depends(get_current_user)):
# async def read_users_me(current_user:User= Depends(get_current_user_from_cookie)):
    """Protected route - requires valid JWT"""
    print("final result - Current user in /me endpoint:", current_user)  # Debugging line
    return current_user
# ==================/
# @router.post("/logout")
# async def logout(response: Response):
#     delete_auth_cookies(response)
#     return {"message": "Successfully logged out"}

# @router.post("/verify-email")


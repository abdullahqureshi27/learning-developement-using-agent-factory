// ============Manual setup =================
"use client"
import {useAuth} from '@/context/AuthContext'
const HomePage = () => {
  const { user } = useAuth()
  return (
    <div>
      home page and the user is {user ? user.email : "not logged in"}
    </div>
  )
}

export default HomePage





// ============= Better Auth ==================
// import { auth } from "@/lib/auth"
// import { headers } from "next/headers"

// async function ServerComponent() {
//     const session = await auth.api.getSession({
//         headers: await headers()
//     })
//     if(!session) {
//         return <div>Not authenticated</div>
//     }
//     return (
//         <div>
//             <h1>Welcome {session.user.name}</h1>
//         </div>
//     )
// }
// export default  ServerComponent
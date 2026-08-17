"use client";

import { useForm } from "react-hook-form";
import { signupSchema, SignupForm } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupForm) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" placeholder="Password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
}

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useState } from "react";
// import RHFInput from "@/components/RHFInput";

// type LoginForm = {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   rememberMe: boolean;
// };

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState<boolean>(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors, isSubmitting, isValid },
//   } = useForm<LoginForm>({
//     ...{
//       mode: "onTouched",
//       defaultValues: {
//         email: "",
//         password: "",
//         confirmPassword: "",
//         rememberMe: false,
//       },
//     },
//   });

//   const password = watch("password");
//   const rememberMe = watch("rememberMe");

//   async function onSubmit(data: LoginForm) {
//     console.log("Form submitted:", data);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     reset();
//   }

//   return (
// <main className="flex min-h-screen items-center justify-center  p-6">
//   <form
//     onSubmit={handleSubmit(onSubmit)}
//     className="w-full max-w-md rounded-2xl  p-6 shadow"
//   >
//     <h1 className="text-2xl font-bold  ">Login</h1>

//     <div className="mt-6 space-y-4">
//       <RHFInput
//         label="Email"
//         type="email"
//         placeholder="you@example.com"
//         registration={register("email", {
//           required: "Email is required",
//         })}
//         error={errors.email?.message}
//       />

//       <RHFInput
//         label="Password"
//         type={showPassword ? "text" : "password"}
//         placeholder="Enter password"
//         registration={register("password", {
//           required: "Password is required",
//           minLength: {
//             value: 6,
//             message: "Password must be at least 6 characters",
//           },
//         })}
//         error={errors.password?.message}
//         isVisible={showPassword}
//         setIsVisible={setShowPassword}
//       />

//       <RHFInput
//         label="Confirm Password"
//         type={showConfirmPassword ? "text" : "password"}
//         placeholder="Confirm password"
//         registration={register("confirmPassword", {
//           required: "Confirm password is required",
//           validate: (value) =>
//             value === password || "Passwords do not match",
//         })}
//         error={errors.confirmPassword?.message}
//         isVisible={showConfirmPassword}
//         setIsVisible={setShowConfirmPassword}
//       />

//       <div className="flex items-center gap-2">
//         <Checkbox
//           id="rememberMe"
//           checked={rememberMe}
//           onCheckedChange={(checked) => {
//             setValue("rememberMe", checked === true);
//           }}
//         />

//         <label htmlFor="rememberMe" className="text-sm text-gray-700">
//           Remember me
//         </label>
//       </div>
//     </div>

//     <Button
//       type="submit"
//       className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-2 font-medium text-white"
//       disabled={isSubmitting || !isValid}
//     >
//       Login
//     </Button>
//   </form>
// </main>
//   );
// }

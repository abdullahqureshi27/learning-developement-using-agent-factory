// import { z } from "zod";

// export const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters long"),
// });

// export const signupSchema = z
//   .object({
//     name: z
//       .string({ error: "Name is required" })
//       .min(3, "Name must be at least 3 characters long"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters long"),
//     confirmPassword: z
//       .string()
//       .min(6, "Confirm Password must be at least 6 characters long"),
//     rememberMe: z.boolean(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// export type SignupForm = z.infer<typeof signupSchema>;
// export type LoginForm = z.infer<typeof loginSchema>;

import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

export type SignupForm = z.infer<typeof signupSchema>;
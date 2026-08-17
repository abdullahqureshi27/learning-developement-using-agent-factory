// import { z } from "zod";
// import { SignupForm, signupSchema } from "@/types/auth";
// const formData: SignupForm = {
//   name: "Abdullah Qureshi",
//   email: "abdullah@gmail.com",
//   password: "12345w6w",
//   confirmPassword: "123456",
//   rememberMe: true,
// };

// const result = signupSchema.safeParse(formData);
// if (!result.success) {
//   console.log(result.error.flatten().fieldErrors);
// } else {
//   console.log(result.data);
// }

// // const userSchema = z.object({
// //   name: z
// //     .string({ error: "Name is required" })
// //     .min(1, "Name should be at least 1 character long")
// //     .nonempty("Name is required"),
// //   email: z.string().email("Invalid email address"),
// //   password: z.string().min(6, "Password must be at least 6 characters long"),
// // });
// // type User = z.infer<typeof userSchema>;
// // const userData  : User= {
// //   name: "Abdullah ",
// //   email: "abdullah@gmail.com",
// //   password: "123456",
// // };

// // const result = userSchema.safeParse(userData);

// // // console.log(result);

// // if (!result.success) {
// //   console.log(result.error.flatten().fieldErrors);
// // } else {
// //   console.log(result.data);
// // }

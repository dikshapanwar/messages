import {z} from "zod";
export const usernameValidator = z
.string()
.min(4,"username must be atleast 4 characters")
.max(20,"username must be atmost 20 characters")
.regex(/^[a-zA-Z0-9_]+$/,"username must contain only letters,numbers and underscore");

export const emailValidator = z.string()
.email({message:"Invalid email format"})
.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

export const passwordValidator = z.string()
.min(6,{message:"password must be atleast 6 characters"})
.max(20);

export const signUpSchema = z.object({
  username: usernameValidator,
  email: emailValidator,
  password: passwordValidator,
});


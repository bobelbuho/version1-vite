import * as z from "zod"

export const SignupValidation = z.object({
    firstname: z.string().min(2, {message: 'Veuillez renseignez votre prénom'}),
    name: z.string().min(2, {message: "Veuillez renseignez votre nom"}),
    email: z.string().email(),
    password: z.string().min(8, {message:"Votre mot de passe doit contenir au moins 8 lettres"}),
    passwordConfirm: z.string().min(8, {message:"Votre mot de passe doit contenir au moins 8 lettres"}),
});

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message:''}),
    });

    export const ProfileValidation = z.object({
        file: z.custom<File[]>(),
        name: z.string().min(2, { message: "Name must be at least 2 characters." }),
        username: z.string().min(2, { message: "Name must be at least 2 characters." }),
        email: z.string().email(),
        bio: z.string(),
      });
      
      // ============================================================
      // POST
      // ============================================================
      export const PostValidation = z.object({
        caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
        file: z.custom<File[]>(),
        location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
        tags: z.string(),
      });
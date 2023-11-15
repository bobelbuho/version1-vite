import * as z from "zod"

export const SignupValidation = z.object({
    firstname: z.string().min(2, {message: 'Veuillez renseignez votre prénom'}),
    name: z.string().min(2, {message: "Veuillez renseignez votre nom"}),
    email: z.string().email(),
    password: z.string().min(8, {message:"Votre mot de passe doit contenir au moins 8 lettres"}),
    passwordConfirm: z.string().min(8, {message:"Votre mot de passe doit contenir au moins 8 lettres"}),
});
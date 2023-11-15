import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Veuillez renseignez votre nom'}),
    username: z.string().min(6, {message: "Votre nom d'utilisateur doit contenir au moins 6 lettres "}),
    email: z.string().email(),
    password: z.string().min(8, {message:"Votre mot de passe doit contenir au moins 8 lettres"}),
})
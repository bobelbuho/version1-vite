import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { SignupValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/ui/shared/Loader"
import { Link } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { userCreateUserAccount } from "@/lib/react-query/queriesAndMutations"




const SignupFom = () => {
  const { toast } = useToast();
  

const { mutateAsync: createUserAccount, isLoading: isCreatingUser } = userCreateUserAccountMutation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      //firstname: ''
      name: "",
      email: '', //error below,
      password: '',
      //passwordConfirm: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);
   if(!newUser){
    return toast({title: "Connexion échouée, veuiller réessayer",})
   }
   // const session = await signInAccount();
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col mt-10">
        <img src="assets/images/logo.svg" alt="logo"></img>

        <h1 className="h3-bold md:h2-bold pt-5 sm:pt-12">Faisons connaissance</h1>
        <p className="text-dark-3 small-medium md:base-regular mt-2">Créez votre compte pour pouvoir publier et reserver des trajets</p>




        <form onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmez votre mot de passe</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isCreatingUser ? (
              <div className="flex-center gap-2">
                <Loader /> Chargement...
              </div>
            ) : "Sign up "}
          </Button>

          <p className="text-small-regular text-dark-2 text-center mt-2">
            J'ai déjà un compte ?
            <Link to='/sign-in' className="text-primary-500 text-small-semibold ml-1">
              Connexion
            </Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupFom
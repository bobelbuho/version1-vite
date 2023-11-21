import { INewUser } from '@/types'
import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'

export const userCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    })
}

export const userSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {
            email: string ; 
            password: string ;
        }) => signInAccount(user),
    })
}

//1h34.40
//2h20.39
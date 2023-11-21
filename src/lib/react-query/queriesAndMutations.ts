import { INewUser } from '@/types'
import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'

export const userCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

//1h34.40
//2h20.39
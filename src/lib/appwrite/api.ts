import { ID } from 'appwrite';

import { INewUser } from "@/types";
import { account } from './config';

export async function createUserAccount(user: INewUser){
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.passwordConfirm,
            user.name,
            user.firstname,
        )

        return newAccount;
    }catch (error){
        console.log(error);
        return error;
    }
}
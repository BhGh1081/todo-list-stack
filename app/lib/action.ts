'use server';

import postgres from "postgres";
import { signIn } from '@/app/auth';
import { AuthError } from "next-auth";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function getCategories(id: string) {

    try {
        const raw = await sql`SELECT category FROM tasks 
        WHERE user_id = ${id}`;

        const categories = raw.map((r) => r.category as string);

        return categories;
    } catch {
        console.error('database error');
        return [];
    }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin':
                    return 'Invalid Data';
                default:
                    return 'Something went wrong';
            }
        }
        throw error;
    }
}
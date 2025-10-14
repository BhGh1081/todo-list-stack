'use server';

import postgres from "postgres";
import { signIn } from '@/app/auth';
import { AuthError } from "next-auth";
import { auth } from "@/app/auth";
import z from "zod";


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
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.message.includes('CredentialsSignin'))
                return 'Invalid Data'
            return 'Something went wrong'
        }
        throw error;
    }
}


export async function addTask(prevState: void | undefined, formData: FormData) {

    const session = await auth();
    const userId = session!.user!.id as string;

    const title = formData.get('title') as string;
    const describtion = formData.get('description') as string| null;
    const category = formData.get('category') as string | null;
    let date = (formData.get('date') as string | null)

    if(!date)
        date =  new Date().toISOString();

    try {
        await sql`INSERT INTO tasks(user_id, title, description, category, date)
        VALUES (${userId}, ${title}, ${describtion || null}, ${category || null}, ${date})`;
    } catch (error) {
        console.error(error)
    }
}


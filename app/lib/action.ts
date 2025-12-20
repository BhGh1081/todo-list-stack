'use server';

import { signIn, signOut, auth } from '@/auth';
import { AuthError } from "next-auth";
import sql from "./db";
import { redirect } from 'next/navigation';
import { TaskType } from './definision';


interface categoriesType {
    category: string
}
export async function getCategories(id: string) {

    try {
        const raw = await sql`SELECT category FROM tasks 
        WHERE user_id = ${id}`;

        const categories = raw.map((r:categoriesType) => r.category as string);

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

export async function getUserWithEmail(email: string) {
   const user = await sql `SELECT * FROM users WHERE email = ${email} `;
   return user[0];
}

export async function addTask(prevState: void | undefined, formData: FormData) {

    const session = await auth();
    const userId = session!.user!.id as string;

    const title = formData.get('title') as string;
    const describtion = formData.get('description') as string | null;
    const category = formData.get('category') as string | null;
    let date = (formData.get('date') as string | null)

    if (!date)
        date = new Date().toISOString();

    try {
        await sql`INSERT INTO tasks(user_id, title, description, category, date, completed)
        VALUES (${userId}, ${title}, ${describtion || null}, ${category || null}, ${date}, ${false})`;
    } catch (error) {
        console.error(error)
    }
    redirect('/')
}



export async function getUserTasks(id: string, status?: string) {

    try {
        let tasks = await sql`SELECT * FROM tasks WHERE user_id = ${id}`;
        if(status === 'Completed'){
            tasks = tasks.filter((task: TaskType) => task.completed === true)
        }else if(status === 'Pending'){
            tasks = tasks.filter((task: TaskType) => task.completed === false)
        }//else if(status === 'All') return tasks
        return tasks;
    } catch(err) {
        throw new Error('Invalid Email');
    }

}

export async function taskCheck(id:string) {

    await sql`UPDATE tasks SET completed = NOT completed WHERE id=${id}`
}


export async function deleteTask(id: string){

    await sql`DELETE FROM tasks WHERE id=${id}`;
    redirect('/');
}

export async function getTaskWithId(id:string){
    try{
    const task = await sql`SELECT * FROM tasks WHERE id = ${id}`;
    return task[0];
    }catch(err){
        throw new Error('Database Error')
    }

}

export async function updateTask(formData: FormData){

    const id = formData.get('id') as string
    const title = formData.get('title') as string;
    const description = formData.get('description') as string | null;
    const category = formData.get('category') as string | null;
    let date = formData.get('date') as string | null;

    if(!date){
        date = new Date().toISOString();
    }

    try{
    await sql`UPDATE tasks SET
        title = ${title}, description = ${description},
        category = ${category}, date = ${date}
        WHERE id = ${id}`;
    }catch(err){
        console.error('database error', err)
        throw new Error('Update Faild');
    }
    redirect('/');
}

export async function SignOutAction() {
    await signOut({redirectTo: '/'})
}


export async function getCategory(id: string){
    const category = (await sql`SELECT DISTINCT category FROM tasks WHERE user_id=${id} AND category IS NOT NULL AND category <> ''`).map((r: {category: string}) => r.category);

    return category;
}
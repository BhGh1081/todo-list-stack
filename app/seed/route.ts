import postgres from 'postgres';
import { users, tasks } from '@/app/lib/placeholder-data';
import bcrypt from 'bcrypt';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function seedUsers() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL) `;

    console.log('user table created');

    const userId = await Promise.all(
        users.map(async (user) => {
            const hashPassword = await bcrypt.hash(user.password, 10)
            const userData = await sql <{ id: string }[]>`
        INSERT INTO users(name, email, password)
        VALUES (${user.name}, ${user.email}, ${hashPassword})
        RETURNING id`;
            return userData[0]?.id
        })
    );
    console.log('user data added');
    return userId;
}


export async function seedTasks(userId: string[]) {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`CREATE TABLE IF NOT EXISTS tasks(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL);`;

    console.log('tasks table created');

    const insertTasks = await Promise.all(
        tasks.map((task, index) => {
            console.log("DEBUG task insert:", {
                idx: index,
                userId: userId[index],
                title: task.title,
                description: task.description,
                category: task.category
            });
            return sql`
            INSERT INTO tasks (user_id, title, description, category)
            VALUES(${userId[index]}, ${task.title}, ${task.description}, ${task.category});`
        })
    );
    console.log('task data added');
    return insertTasks;
}

export async function GET() {
    try {
        const result = await seedUsers();
        await seedTasks(result);
        console.log('success');
    } catch (error) {
        console.log('seed error', error)
    }
    return Response.json('Data seed seccessfully');
} 

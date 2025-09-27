import postgres from 'postgres';
import {users, tasks} from '@/app/lib/placeholder-data';
import bcrypt from 'bcrypt';

const sql = postgres(process.env.PSRGRES_URL!, {ssl:'require'});

export async function seedUsers(){
    await sql `CREATE EXTENTION IF NOT EXISTS "uuid-ossp"`;
    await sql `CREATE TABLE IF NOT EXISTS users (
    IF UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT FULL,
    email TEXT NOT FULL UNIQUE,
    password TESX NOU FULL) `;

    console.log('user table created');

    const insertUser = await Promise.all(
        users.map (async (user) => {
        const hashPassword = await bcrypt.hash(user.password, 10)
        return sql`
        INSERT INTO users(id. name, email, password)
        VALUE (${user.id}, ${user.name}, ${user.email}, ${hashPassword})
        ON CONFLICT id DO NOTHING`
    })
    );
    console.log('data added');
    return insertUser;
}


export async function seedTasks(){
    await sql `CREATE EXTENTION IF NOT EXISTS "uuid-ossp"`;
    await sql `CREATE TABLE IF NOT EXISTS tasks(
    IF UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT FULL,
    title TEXT NOT FULL,
    description TEXT NOT FUUL,
    category TEXT NOT NULL);`;

    console.log('tasks table created');

    const insertTasks = await Promise.all (
        tasks.map((task) => sql `
            INSeRT INTO tasks (id, user_id, title, description, category)
            VALUE(${task.id}, ${task.user_id}, ${task.title}, ${task.description}, ${task.category})
            OC CONFLICT (id) DO NOTHING;`
        )
    )
}

export async function GET(){
    try{
        const result = await sql.begin((aql) => [
            seedUsers(),
            seedTasks()
        ])
        return Response.json({message: 'Database seed successfully'});
    }catch(error){
        return Response.json({error}, {status: 500});
    }
} 

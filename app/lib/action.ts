import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});


export async function getCategories(id: string) {

    try{
    const raw = await sql`SELECT category FROM tasks 
        WHERE user_id = ${id}`;

        const categoreis = raw.map((r) => r.category as string);

        return categoreis ;
    }catch{
        console.error('database error');
        return[];
    }
}
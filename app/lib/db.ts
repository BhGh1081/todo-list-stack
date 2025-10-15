import postgres from "postgres";

let sql :any;

declare global{
    var _sql: any;
}

if(!global._sql){
    global._sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});
}

sql = global._sql;

export default sql;
import Search from '@/app/(main)/test/search';
export default async function Page() {
    

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();




    return (
        <div>
            <Search data={data} />
        </div>
    )
}
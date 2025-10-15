import Card from "./card"

interface tasksType {
    id: string,
    user_id: string,
    title: string,
    description: string,
    category: string,
    date: Date,
    completed: Boolean
}
export default function Tasks({ tasks }: { tasks: tasksType[] }) {
    

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <Card />
                </div>
            ))}
        </div>
    )
}
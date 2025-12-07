import { getUserTasks } from "../lib/action";
import Tasks from "./tasks";
import { TaskType } from "../lib/definision";
import { SessionUserType } from "../lib/definision";


export default async function UserTask(id: string, status: string) {

    const isLogedIn = !!id;
    let tasks;
    
    if (isLogedIn) {
        tasks = await getUserTasks(id, status);
    }

    return tasks;


    /* return (
        <div>
            {tasks ?
                <Tasks tasks={tasks} /> :
                <div className="flex flex-col space-y-6 items-center h-full justify-center">
                    <img
                        src='image/no-data.svg'
                        className="w-80"
                    />
                    <strong>No Tasks Yet</strong>
                </div>
            }
        </div>
    ) */
}
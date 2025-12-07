import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";
import { auth } from "@/auth";
import { getUserTasks } from "./lib/action";
import Tasks from "./ui/tasks";

export default async function page() {


  const session = await auth();
  const isLogedIn = !!session?.user
  let tasks;

  if (isLogedIn) {
    tasks = await getUserTasks(session?.user?.id as string)
  }


  return (
    <div className="flex flex-col w-full md:flex-row flex-1 space-y-2 md:space-y-0 space-x-2 justify-between">
      <SideBar isLogedIn={isLogedIn} />
      <div className="flex-3 felx bg-gray-50 rounded p-4">
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

    </div>
  );
}

import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import { auth } from "./auth";
import { getTaskWithId } from "./lib/action";
import { tasks } from "./lib/placeholder-data";
import Tasks from "./ui/tasks";

export default async function page() {


  const session = await auth();
  const isLogedIn = !!session?.user
  let tasks;

  if (isLogedIn) {
    tasks = await getTaskWithId(session?.user?.id as string)
    console.log(tasks)
  }


  return (
    <div className="flex flex-col min-h-screen space-y-2 p-4">
      <header className="h-auto relative">
        <ListLogo />
        <div className="flex items-center absolute right-4 top-5">
          <Link href='/add-task'>
            <PlusIcon className="w-8 h-8" />
          </Link>
        </div>
      </header>
      <main className="flex flex-col md:flex-row flex-1 space-x-2 justify-between ">

        <SideBar isLogedIn={isLogedIn} />
        <div className="flex-3 felx bg-gray-50 p-4 items-center content-center">
          {tasks ?
            <Tasks tasks={tasks} /> :
            <div className="flex flex-col space-y-6 items-center justify-center">
              <img
                src='image/no-data.svg'
                className="w-80"
               />
              <strong>No Tasks Yet</strong>
            </div>
          }
        </div>

      </main>
    </div>
  );
}

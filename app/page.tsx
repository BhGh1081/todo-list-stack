'use client';

import { SideBar } from "@/app/ui/sideBar";
//import { auth } from "@/auth";
import { getUserTasks } from "./lib/action";
import Tasks from "./ui/tasks";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page(/* {searchParams}: {searchParams: {status?: string}} */) {

  /* const session = await auth();
  const isLogedIn = !!session?.user; */

  const searchParams = useSearchParams();
  const status = searchParams?.get('status');
  const [tasks, setTasks] = useState();


  const session = useSession();
  const isLogedIn = !!session.data?.user;
  const id = session.data?.user?.id;
  console.log('session data:', session.data?.user);

  useEffect(() => {

    if(isLogedIn){
    getUserTasks(id as string, status as string).then(data => setTasks(data))
      .then(() => console.log('tasks:', tasks))
      .then(() => console.log('status', status))
    }
  },[])



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

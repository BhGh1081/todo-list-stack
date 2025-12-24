import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";
import { auth } from "@/auth";
import { getUserTasks, getCategory } from "../lib/action";
import Tasks from "../ui/tasks";
import { DataProvider } from "../providers/providers";




// تابع جدا برای fetch دیتا و پردازش auth
async function getPageData(userId?: string) {

  if (!userId) return { tasks: null, category: ['Select Item'] };

  const tasks = await getUserTasks(userId);
  const category = tasks ? await getCategory(userId) : ['Select Item'];

  return { tasks, category };
}

export default async function TasksPage() {
  const session = await auth();
  //const isLogedIn = !!session?.user;

  const { tasks, category } = await getPageData(session?.user?.id);

  return (
    <DataProvider tasks={tasks} categories={category}>
    <div className="flex flex-col w-full md:flex-row flex-1 space-y-2 md:space-y-0 space-x-2 justify-between">
      <SideBar />
      {/*<div className="flex flex-col space-y-2 flex-3">
        <div className="md:flex md:space-x-2">
          <Search tasks={tasks} />
          <CategoryFilter selectList={category} />
          <input type="date" className="hidden md:block w-full h-[48px] bg-white text-gray-400 p-3 rounded-md flex-1" />
        </div> */}
        <div className="flex-3 felx rounded">
          {tasks ?
            <Tasks /> :
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
    </DataProvider>
  );
}
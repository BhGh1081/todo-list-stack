import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";
import { auth } from "@/auth";
import { getUserTasks, getCategory } from "../lib/action";
import Tasks from "../ui/tasks";
import Search from "../ui/search";
import CategoryFilter from "../ui/categoryFilter";

/*export default async function page() {


  const session = await auth();
  const isLogedIn = !!session?.user
  let tasks;
  let data;
  let category = ['Select Item'];


  if (isLogedIn) {
    tasks = await getUserTasks(session?.user?.id as string)
    if (tasks) {
      category = await getCategory(session.user?.id as string);
    }
  }




  return (
    <div className="flex flex-col w-full md:flex-row flex-1 space-y-2 md:space-y-0 space-x-2 justify-between">
      <SideBar isLogedIn={isLogedIn} />
      <div className="flex flex-col space-y-2 flex-3">
        <div className="md:flex md:space-x-2">
          <Search />
          <CategoryFilter selectList={category} />
          <input type="date" className="hidden md:block w-full h-[48px] bg-white text-gray-400 p-3 rounded-md flex-1" />
        </div>
        <div className="flex-1 felx bg-gray-50 rounded p-4">
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
    </div>
  );
} */


// تابع جدا برای fetch دیتا و پردازش auth
async function getPageData(userId?: string) {
  if (!userId) return { tasks: null, category: ['Select Item'] };

  const tasks = await getUserTasks(userId);
  const category = tasks ? await getCategory(userId) : ['Select Item'];

  return { tasks, category };
}

export default async function TasksPage() {
  const session = await auth();
  const isLogedIn = !!session?.user;

  const { tasks, category } = await getPageData(session?.user?.id);

  return (
    <div className="flex flex-col w-full md:flex-row flex-1 space-y-2 md:space-y-0 space-x-2 justify-between">
      <SideBar isLogedIn={isLogedIn} />
      <div className="flex flex-col space-y-2 flex-3">
        <div className="md:flex md:space-x-2">
          <Search />
          <CategoryFilter selectList={category} />
          <input type="date" className="hidden md:block w-full h-[48px] bg-white text-gray-400 p-3 rounded-md flex-1" />
        </div>
        <div className="flex-1 felx bg-gray-50 rounded p-4">
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
    </div>
  );
}
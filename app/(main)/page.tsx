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
        {/* <div className="bg-red-500 flex-3 felx rounded"> */}
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
        {/* </div> */}
      </div>
    </DataProvider>
  );
}
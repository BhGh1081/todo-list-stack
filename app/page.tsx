import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";
import { getCategories } from "@/app/lib/action";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import { auth } from "./auth";
import AddTaskForm from "./ui/addTask-form";

export default async function page() {

  let categories = [''];

  const session = await auth();
  if (!session?.user?.id) {
    categories = ['please sign in'];
  } else {
    categories = await getCategories(session.user.id);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-auto relative">
          <ListLogo />
          <div className="flex items-center absolute right-4 top-5">
            <Link href='/add-task'>
              <PlusIcon className="w-8 h-8" />
            </Link>
          </div>
      </header>
      <main className="flex flex-1 justify-between ">

          <SideBar categories={categories} />

      </main>
    </div>
  );
}

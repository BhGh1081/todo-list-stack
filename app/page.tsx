import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";
import { getCategories } from "@/app/lib/action";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import { auth } from "./auth";
import { string } from "zod";

export default async function page() {

  let categories = [''];

  const session =await auth();
  if(!session?.user?.id) {
    categories = ['please sign in'];
  }else{
    categories = await getCategories(session.user.id);}

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div  className="relative">
          <ListLogo />
          <div className="flex items-center absolute right-4 top-5">
          <Link href='/add-task'>
            <PlusIcon className="w-8 h-8" />
          </Link>
        </div>
        </div>
        

      </header>
      <main>
        <SideBar categories={categories} />
      </main>
    </div>
  );
}

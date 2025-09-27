import Image from "next/image";
import { ListLogo } from "@/app/ui/listLogo";
import { SideBar } from "@/app/ui/sideBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen sm:p-20">
      <header>
        <ListLogo />
      </header>
      <main>
        <SideBar />
      </main>
    </div>
  );
}

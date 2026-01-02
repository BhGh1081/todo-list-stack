
import { Header } from "../ui/header";
import { SeProvider } from "../providers/sessionProvider";




export default async function MainLayout({ children }:
  { children: React.ReactNode }) {


  return (
    <SeProvider>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden space-y-2 md:px-4 px-2">
        <Header />
        <main className="flex h-[calc(100vh-200px)] justify-center flex-1 w-full md:mt-55 sm:mt-20.5 mt-24.5">
          {children}
        </main>
      </div>
    </SeProvider>
  );
}

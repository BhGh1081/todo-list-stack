
import { Header } from "../ui/header";
import { SeProvider } from "../providers/sessionProvider";




export default async function MainLayout({ children }:
  { children: React.ReactNode }) {


  return (
    <SeProvider>
      <div className="flex flex-col h-screen items-center justify-center overflow-hidden space-y-2 md:p-4 p-2">
        <Header/>
        <main className="md:h-[calc(100vh-200px)] flex overflow-hidden justify-center flex-1 w-full">
          {children}
        </main>
      </div>
    </SeProvider>
  );
}

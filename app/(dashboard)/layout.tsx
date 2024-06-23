import Navbar from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sideBar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="h-full relative">
    //   <div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
    //     <Sidebar />
    //   </div>
    //   <main className="md:pl-60">
    //     <Navbar />
    //     {children}
    //   </main>
    // </div>
    //
    <main className="flex">
      <Sidebar />
      <div className=" flex flex-col w-full h-screen">
        <Navbar />
        <div className="flex-1 relative">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;

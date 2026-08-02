import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <>
          <main className="p-6">{children}</main>

          <footer className="border-t bg-white text-center text-sm text-gray-500 py-4">
            © 2026 Pratama Clinic Information System
          </footer>
        </>
      </div>
    </div>
  );
}

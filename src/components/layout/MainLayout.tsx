import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

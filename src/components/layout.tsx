import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

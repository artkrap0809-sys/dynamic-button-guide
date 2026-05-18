import { Link, useRouter } from "@tanstack/react-router";
import { ChevronLeft, MoreHorizontal } from "lucide-react";
import type { ReactNode } from "react";

export function PhoneShell({
  children,
  title,
  showHelp = true,
}: {
  children: ReactNode;
  title?: string;
  showHelp?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative">
      {/* header */}
      <header className="flex items-center justify-between px-5 py-3 pt-5">
        <Link to="/transacciones" className="block">
  <img
  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/brand-motion.png?fit=690%2C690&ssl=1"
  alt="Wallapop"
  className="w-15 h-15 rounded-2xl object-cover shadow-md hover:opacity-80 transition"
/>
        </Link>
        {title && <h1 className="text-base font-semibold">{title}</h1>}
        {showHelp && (
          <Link
            to="/dudas"
            className="text-wallapop-dark font-semibold text-base hover:underline"
          >
            ¿Dudas?
          </Link>
        )}
      </header>

      <main className="flex-1 px-5 pb-24">{children}</main>

      {/* bottom nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 flex items-center justify-between px-8 py-4 z-40">
        <button
          onClick={() => router.history.back()}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          aria-label="Atrás"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="w-32 h-1 rounded-full bg-gray-200" />
        <Link
          to="/menu"
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          aria-label="Más"
        >
          <MoreHorizontal className="w-5 h-5" />
        </Link>
      </nav>
    </div>
  );
}

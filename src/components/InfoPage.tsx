import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PhoneShell } from "./PhoneShell";

export function InfoPage({
  title,
  intro,
  children,
  cta = { label: "Volver al pago", to: "/" },
}: {
  title: string;
  intro?: string;
  children?: ReactNode;
  cta?: { label: string; to: string };
}) {
  return (
    <PhoneShell showHelp={false}>
      <h1 className="text-2xl font-bold mt-2">{title}</h1>
      {intro && <p className="mt-3 text-gray-600 leading-relaxed">{intro}</p>}
      <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-5">
        <Link
          to={cta.to}
          className="block text-center w-full py-4 rounded-full bg-wallapop hover:bg-wallapop-dark transition text-white font-semibold"
        >
          {cta.label}
        </Link>
      </div>
    </PhoneShell>
  );
}

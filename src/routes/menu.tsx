import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell } from "@/components/PhoneShell";

export const Route = createFileRoute("/menu")({
  component: () => (
    <PhoneShell showHelp={false}>
      <h1 className="text-2xl font-bold mt-2">Más opciones</h1>
      <ul className="mt-6 space-y-2">
        {[
          { to: "/producto", label: "Ver producto" },
          { to: "/seguridad", label: "Seguridad del pago" },
          { to: "/dudas", label: "Centro de ayuda" },
          { to: "/monedero", label: "Mi monedero" },
        ].map((i) => (
          <li key={i.to}>
            <Link
              to={i.to}
              className="block border border-gray-200 rounded-2xl px-5 py-4 font-medium hover:bg-gray-50"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </PhoneShell>
  ),
});

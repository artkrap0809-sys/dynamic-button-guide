import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, TrendingUp, Star, ShieldCheck } from "lucide-react";
import { PhoneShell } from "@/components/PhoneShell";

export const Route = createFileRoute("/transacciones")({
  component: Transacciones,
  head: () => ({
    meta: [
      { title: "Transacciones exitosas · Wallapop" },
      { name: "description", content: "Estadísticas y operaciones completadas con éxito." },
    ],
  }),
});

const deals = [
  { id: "WLP-298470", title: "iPhone 13 Pro 256GB", amount: "612,00 €", date: "Hoy" },
  { id: "WLP-298465", title: "Sony WH-1000XM5", amount: "245,90 €", date: "Ayer" },
  { id: "WLP-298440", title: "Nintendo Switch OLED", amount: "289,00 €", date: "12 mayo" },
  { id: "WLP-298401", title: "Bicicleta Orbea Alma", amount: "1.150,00 €", date: "10 mayo" },
  { id: "WLP-298377", title: "Cámara Fujifilm X-T4", amount: "899,00 €", date: "8 mayo" },
  { id: "WLP-298320", title: "Apple Watch Series 9", amount: "365,00 €", date: "5 mayo" },
];

function Transacciones() {
  return (
    <PhoneShell showHelp={false}>
      <h1 className="text-2xl font-bold mt-2">Transacciones exitosas</h1>
      <p className="mt-1 text-sm text-gray-500">
        Operaciones completadas con la garantía de Wallapop.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <Stat icon={<CheckCircle2 className="w-5 h-5" />} value="12 847" label="Ventas exitosas" />
        <Stat icon={<TrendingUp className="w-5 h-5" />} value="98,7%" label="Tasa de éxito" />
        <Stat icon={<Star className="w-5 h-5" />} value="4,9 / 5" label="Valoración media" />
        <Stat icon={<ShieldCheck className="w-5 h-5" />} value="100%" label="Pagos protegidos" />
      </div>

      <h2 className="mt-8 text-lg font-semibold">Últimas operaciones</h2>
      <ul className="mt-3 space-y-2">
        {deals.map((d) => (
          <li
            key={d.id}
            className="flex items-center gap-3 border border-gray-200 rounded-2xl p-3"
          >
            <div className="w-10 h-10 rounded-full bg-wallapop-soft text-wallapop-dark flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{d.title}</p>
              <p className="text-xs text-gray-500">
                {d.id} · {d.date}
              </p>
            </div>
            <span className="font-semibold text-sm">{d.amount}</span>
          </li>
        ))}
      </ul>
    </PhoneShell>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4">
      <div className="w-9 h-9 rounded-full bg-wallapop-soft text-wallapop-dark flex items-center justify-center">
        {icon}
      </div>
      <p className="mt-3 text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}

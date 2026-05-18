import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { PhoneShell } from "@/components/PhoneShell";
import { PayPalLogo } from "@/components/PayPalLogo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pago seguro · Wallapop" },
      { name: "description", content: "Wallapop actúa como garante de tu compra. Paga de forma segura." },
    ],
  }),
});

type Method = "card" | "klarna" | "paypal";

function Index() {
  const [method, setMethod] = useState<Method>("card");
  const navigate = useNavigate();

  return (
    <PhoneShell>
      {/* Wallet info */}
      <Link
        to="/monedero"
        className="block w-full border border-gray-200 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-50 transition"
      >
        <Wallet className="w-7 h-7 shrink-0" strokeWidth={1.5} />
        <p className="text-sm text-gray-800 leading-snug">
          Cuando tengas saldo en el monedero, podrás pagar con él.
        </p>
      </Link>

      {/* Methods */}
      <div className="mt-6 space-y-1">
        <MethodRow
          selected={method === "card"}
          onSelect={() => setMethod("card")}
icon={
  <img
    src="/EF2D2FC0-2C5A-4BDB-A6F5-690BE22D75B3_4_5005_c.jpeg"
    alt="card"
    className="w-20 h-15 object-contain"
  />
}
          title="Tarjeta bancaria"
          extra={
            method === "card" && (
              <div className="mt-3 ml-16">
                <Link
                  to="/editar-tarjeta"
                  className="inline-block px-6 py-2.5 rounded-full border border-wallapop text-wallapop-dark font-semibold text-sm hover:bg-wallapop-soft transition"
                >
                  Editar tarjeta
                </Link>
              </div>
            )
          }
        />

        <Divider />

        <MethodRow
          selected={method === "klarna"}
          onSelect={() => setMethod("klarna")}
          icon={
            <div className="w-12 h-7 rounded bg-pink-200 flex items-center justify-center text-[10px] font-bold text-black">
              Klarna
            </div>
          }
          title="Klarna"
          subtitle="Divide tu compra en 3 pagos sin intereses, TAE 0%"
          link="/klarna"
        />

        <Divider />

        <MethodRow
          selected={method === "paypal"}
          onSelect={() => setMethod("paypal")}
          icon={<PayPalLogo className="h-6" />}
          title="PayPal"
          link="/paypal"
        />
      </div>

      {/* Security notice */}
      <p className="mt-6 text-sm text-gray-700 leading-relaxed">
        Tu pago está{" "}
        <Link to="/seguridad" className="text-wallapop-dark font-medium hover:underline">
          encriptado y seguro.
        </Link>{" "}
        El vendedor no recibirá el pago hasta que confirmes que el producto recibido está en buen estado.
      </p>

      {/* Product summary */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link
          to="/producto"
          className="block bg-gray-100 rounded-xl p-3 flex gap-3 hover:bg-gray-200 transition"
        >
          <img
  src="/83FBE021-0210-49A8-A577-757B394F3936.jpeg"
  alt="MacBook"
  className="w-20 h-20 rounded-lg object-cover shrink-0"
/>
          <div className="flex-1 text-right text-sm">
            <div className="flex justify-between text-gray-700">
              <span className="truncate text-left">MacBook Pro 14 M1 Pro / 16GB...</span>
              <span className="font-medium">445,00 €</span>
            </div>
            <div className="text-gray-500 text-xs mt-1">Protección Wallapop: 0 €</div>
            <div className="text-gray-500 text-xs">Envío: 4,49 €</div>
            <div className="mt-1">
              <span className="text-gray-700">Total: </span>
              <span className="font-bold text-base">449,49 €</span>
            </div>
          </div>
        </Link>

        <button
          onClick={() => navigate({ to: "/continuar" })}
          className="mt-3 w-full py-4 rounded-full bg-wallapop hover:bg-wallapop-dark transition text-white font-semibold text-base shadow-sm"
        >
          Continuar
        </button>
      </div>
    </PhoneShell>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 my-1" />;
}

function MethodRow({
  selected,
  onSelect,
  icon,
  title,
  subtitle,
  link,
  extra,
}: {
  selected: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  link?: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="py-3">
      <button
        onClick={onSelect}
        className="w-full flex items-center gap-4 text-left"
      >
        <div className="w-14 flex justify-center">{icon}</div>
        <div className="flex-1">
          {link ? (
            <Link to={link} className="block">
              <p className="font-medium text-gray-900">{title}</p>
              {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
            </Link>
          ) : (
            <>
              <p className="font-medium text-gray-900">{title}</p>
              {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
            </>
          )}
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
            selected ? "border-wallapop bg-wallapop" : "border-gray-300"
          }`}
        >
          {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
      </button>
      {extra}
    </div>
  );
}

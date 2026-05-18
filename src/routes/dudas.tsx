import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/dudas")({
  component: () => (
    <InfoPage
      title="¿Dudas?"
      intro="Te ayudamos con cualquier pregunta sobre tu pago o tu compra."
    >
      <Q q="¿Cuándo se cobra el pago?" a="El cargo se realiza al confirmar la compra, pero el dinero queda retenido por Wallapop hasta que confirmes la recepción del producto." />
      <Q q="¿Qué métodos de pago acepta Wallapop?" a="Tarjeta bancaria (Visa, Mastercard), Klarna y PayPal." />
      <Q q="¿Y si el producto no llega?" a="Si no recibes el producto o no coincide con la descripción, te devolvemos el 100% del importe." />
      <Q q="Contacto" a="Puedes escribirnos a soporte@wallapop.com las 24 horas." />
    </InfoPage>
  ),
});

function Q({ q, a }: { q: string; a: string }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4">
      <p className="font-semibold text-gray-900">{q}</p>
      <p className="mt-1 text-gray-600 text-sm">{a}</p>
    </div>
  );
}

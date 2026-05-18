import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/monedero")({
  component: () => (
    <InfoPage
      title="Monedero Wallapop"
      intro="Tu monedero está vacío. Cuando recibas dinero por una venta, podrás usarlo para pagar tus compras."
    >
      <div className="border border-gray-200 rounded-2xl p-6 text-center">
        <p className="text-sm text-gray-500">Saldo disponible</p>
        <p className="text-4xl font-bold mt-2">0,00 €</p>
      </div>
      <p>El saldo se actualiza automáticamente cuando finalizas una venta correctamente.</p>
    </InfoPage>
  ),
});

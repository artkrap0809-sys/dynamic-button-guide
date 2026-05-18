import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/producto")({
  component: () => (
    <InfoPage title="MacBook Pro 14 M1 Pro / 16GB RAM / SSD 512GB">
<img
  src="/83FBE021-0210-49A8-A577-757B394F3936.jpeg"
  alt="MacBook"
  className="w-100 h-55 rounded-lg object-cover shrink-0"
/>
      <Row label="Precio" value="445,00 €" />
      <Row label="Protección Wallapop" value="0 €" />
      <Row label="Envío" value="4,49 €" />
      <div className="flex justify-between border-t-2 border-gray-200 pt-3 mt-2">
        <span className="font-bold">Total</span>
        <span className="font-bold">449,49 €</span>
      </div>
      <p className="text-xs text-gray-500">
        Vendedor verificado · Envío en 2-4 días laborables.
      </p>
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

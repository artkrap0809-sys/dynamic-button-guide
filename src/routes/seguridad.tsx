import { createFileRoute } from "@tanstack/react-router";
import { Lock, Shield, CheckCircle2 } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/seguridad")({
  component: () => (
    <InfoPage
      title="Pago encriptado y seguro"
      intro="Wallapop actúa como garante de la transacción. Tu dinero está protegido."
    >
      <Item icon={<Lock className="w-5 h-5" />} title="Cifrado SSL 256 bits" desc="Tus datos viajan cifrados de extremo a extremo." />
      <Item icon={<Shield className="w-5 h-5" />} title="Wallapop como garante" desc="Retenemos el pago hasta que confirmes la recepción." />
      <Item icon={<CheckCircle2 className="w-5 h-5" />} title="Devolución asegurada" desc="Si algo no encaja, te devolvemos el 100%." />
    </InfoPage>
  ),
});

function Item({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-3 border border-gray-200 rounded-2xl p-4">
      <div className="w-10 h-10 rounded-full bg-wallapop-soft text-wallapop-dark flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

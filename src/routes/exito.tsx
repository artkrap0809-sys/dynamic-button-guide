import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/exito")({
  component: () => (
    <InfoPage
      title="¡Pago realizado!"
      intro="Hemos recibido tu pago. Te avisaremos cuando el vendedor envíe el producto."
      cta={{ label: "Volver al inicio", to: "/" }}
    >
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-24 h-24 rounded-full bg-wallapop-soft flex items-center justify-center">
          <CheckCircle2 className="w-14 h-14 text-wallapop-dark" />
        </div>
        <p className="mt-4 text-2xl font-bold">214,85 €</p>
        <p className="text-sm text-gray-500">Pedido #WLP-298471</p>
      </div>
    </InfoPage>
  ),
});

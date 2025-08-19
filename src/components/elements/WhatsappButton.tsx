import { generalWhatsAppLink } from "../../utils/whatsapp";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href={generalWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-pulse"
    >
      <MessageCircle size={28} />
    </a>
  );
}

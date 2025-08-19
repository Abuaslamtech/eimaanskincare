
import { MessageCircle, ArrowRight, Sparkles, Star } from "lucide-react";
import { generalWhatsAppLink } from "../../utils/whatsapp";

export default function Cta() {
 

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-800 text-white text-center">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-white/10 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
          <Sparkles className="text-yellow-300" size={20} />
          <span className="text-sm font-bold uppercase">Premium Skincare</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
            Transform Your Skin
          </span>
          <br />
          Starting Today!
        </h2>

        <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto">
          Join <span className="font-bold text-yellow-300">10,000+</span> satisfied customers. 
          Discover the power of natural skincare with personalized consultation!
        </p>

        {/* Key Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Premium Products</h3>
            <p className="text-white/90 text-sm">100% Natural Ingredients</p>
          </div>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">FREE DELIVERY</h3>
            <p className="text-white/90 text-sm">Orders Above ₦20,000</p>
          </div>

          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">FREE CONSULTATION</h3>
            <p className="text-white/90 text-sm">Personalized Skin Analysis</p>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8">
          <a
            href={generalWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300 scale-110"></div>
            
            {/* Main Button */}
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl px-10 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white/30">
              <div className="flex items-center gap-4">
                <MessageCircle size={28} />
                <span>Start Your Journey Now!</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </a>

          <p className="text-sm opacity-80 mt-4">
            Start your consultation via WhatsApp. 
            <span className="font-semibold text-yellow-300"> No commitment required!</span>
          </p>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-400" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <span>10,000+ Happy Customers</span>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <span>100% Natural</span>
        </div>
      </div>
    </section>
  );
}
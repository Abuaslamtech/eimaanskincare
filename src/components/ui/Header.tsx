import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import shopping from "../../assets/shopping.png";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-purple-900/80 to-pink-800/90 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${shopping})`,
        }}
      ></div>

      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <div className="flex flex-col mb-8 justify-center items-center">
          <img src={logo} className="w-32 h-32" />
          <div className="text-2xl md:text-3xl font-light text-pink-200 mb-4 tracking-wider">
            EIMAAN INNOVATIVE SKIN CARE
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">
            Glow Naturally,
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Shine Beautifully
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-2xl mx-auto">
          Transform your skin with our premium organic skincare collection.
          Natural ingredients, proven results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Shop Now <ArrowRight className="inline ml-2" size={20} />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="animate-bounce text-white" size={32} />
      </div>
    </section>
  );
}

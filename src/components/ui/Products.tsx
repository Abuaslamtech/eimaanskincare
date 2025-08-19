import { useState } from "react";
import {
  Star,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { products } from "../../constants/products";
import { generateWhatsAppLink } from "../../utils/whatsapp";

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [likedProducts, setLikedProducts] = useState(new Set());

  const toggleLike = (productId: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-cyan-300/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-pink-100">
            <ShoppingBag className="text-pink-500" size={20} />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Premium Collection
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skincare
            </span>
            <br />
            <span className="text-gray-800">That Transforms</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-32"></div>
            <Sparkles className="text-pink-500" size={28} />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-32"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of premium skincare products, each
            formulated with the finest ingredients for visible results.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border border-white/50 relative">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {product.bestseller && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ BESTSELLER
                    </div>
                  )}
                  {product.organic && (
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      🌿 ORGANIC
                    </div>
                  )}
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(product.id, e)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border border-gray-100"
                >
                  <Heart
                    size={18}
                    className={`transition-colors duration-300 ${
                      likedProducts.has(product.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400 hover:text-red-400"
                    }`}
                  />
                </button>

                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  {/* Product Name & Rating */}
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(Number(product.rating ?? 0))
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-3 py-1 rounded-full font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-pink-600">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save{" "}
                      {Math.round(
                        ((parseInt(
                          product.originalPrice?.replace(/[₦,]/g, "") || "0"
                        ) -
                          parseInt(product.price.replace(/[₦,]/g, ""))) /
                          parseInt(
                            product.originalPrice?.replace(/[₦,]/g, "") || "1"
                          )) *
                          100
                      )}
                      %
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={generateWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center group/btn"
                  >
                    <MessageCircle size={20} className="mr-3" />
                    <span>Order on WhatsApp</span>
                    <ArrowRight
                      size={18}
                      className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-110"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Decide? Get a Personalized Recommendation!
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our skincare experts are ready to help you find the perfect
              products for your unique skin type and concerns.
            </p>
            <a
              href={`https://wa.me/+2348064474739?text=${encodeURIComponent(
                "Hi! I'd like to get personalized skincare recommendations based on my skin type and concerns. Can you help me?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <MessageCircle size={24} />
              Get Free Consultation
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

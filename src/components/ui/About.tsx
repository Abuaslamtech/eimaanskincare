import { Sparkles, Heart, Star, Shield, Zap } from "lucide-react";
import lady from "../../assets/lady.png";
import { features } from "../../constants/features";
import { stats } from "../../constants/stats";

export default function About() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-pink-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-200/25 to-emerald-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-pink-100">
            <Sparkles className="text-pink-500" size={20} />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              About Our Brand
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Revolutionizing
            </span>
            <br />
            <span className="text-gray-800">Skincare Innovation</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-24"></div>
            <Sparkles className="text-pink-500" size={24} />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-24"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where nature meets science to create extraordinary skincare
            experiences that transform not just your skin, but your confidence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                  Our Mission
                </h3>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At{" "}
                <span className="font-semibold text-pink-600">
                  Eimaan Innovative Skin Care
                </span>
                , we believe beauty is more than skin deep. Our mission is to
                empower every individual with products that celebrate their
                unique radiance while respecting both their skin and the planet.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Through cutting-edge research and sustainable practices, we
                craft formulations that deliver visible results while
                maintaining the highest standards of purity and effectiveness.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="text-yellow-500" size={24} />
                What Makes Us Different
              </h4>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:shadow-lg ${feature.bgColor} border-current ${feature.color}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}
                        >
                          <IconComponent size={24} />
                        </div>

                        <div className="flex-1">
                          <h5 className="font-bold text-gray-800 mb-2">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-gray-700">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl rotate-12 shadow-xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl -rotate-12 shadow-xl opacity-80"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg opacity-60"></div>

              {/* Main Image */}
              <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <img
                  src={lady}
                  alt="Premium skincare products"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Info Cards */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Shield className="text-green-500" size={20} />
                    <span className="text-sm font-semibold text-gray-700">
                      Certified Organic
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500" size={20} />
                    <span className="text-sm font-semibold text-gray-700">
                      Award Winning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Trusted by Thousands Worldwide
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 group-hover:shadow-xl">
                      <IconComponent
                        className="text-white transition-all duration-300 group-hover:scale-110"
                        size={24}
                      />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-200">
                      {stat.number}
                    </div>
                    <div className="text-white/90 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

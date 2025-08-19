import { useEffect, useState } from "react";
import { Star, Quote, Heart, Verified, ArrowLeft, ArrowRight, Camera, MapPin, Calendar, ThumbsUp } from "lucide-react";
import { testimonials } from "../../constants/testimonials";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ setHoveredCard] = useState(null);

  
  // Enhanced testimonials data


  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/25 to-orange-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-pink-100">
            <Heart className="text-pink-500" size={20} />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Customer Love</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Glowing
            </span>
            <br />
            <span className="text-gray-800">Reviews</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-32"></div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              <Star size={16} fill="currentColor" />
              4.9/5 Rating
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-32"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who've discovered the transformative power of our skincare products
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="mb-16 relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-[3rem] shadow-2xl overflow-hidden border border-white/50 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50"></div>
            
            <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Customer Info */}
                <div className="text-center md:text-left">
                  {/* Customer Image with Decorative Elements */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <img
                      src={currentReview.image}
                      alt={currentReview.name}
                      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full shadow-2xl border-4 border-white object-cover"
                    />
                    {currentReview.verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <Verified size={16} className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Customer Details */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                      {currentReview.name}
                      {currentReview.verified && <Verified size={20} className="text-green-500" />}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin size={14} />
                        <span>{currentReview.location}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Calendar size={14} />
                        <span>Used for {currentReview.timeUsed}</span>
                      </div>
                    </div>

                    {/* Product Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <Star size={14} className="mr-2" />
                      {currentReview.productUsed}
                    </div>

                    {/* Skin Type & Age */}
                    <div className="flex justify-center md:justify-start gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {currentReview.skinType} Skin
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        Age {currentReview.age}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Review Content */}
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg opacity-20">
                    <Quote size={24} className="text-white" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start mb-6">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={28}
                        className="text-yellow-400 fill-yellow-400 mr-1"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                    "{currentReview.text}"
                  </blockquote>

                  {/* Additional Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <ThumbsUp size={16} className="text-green-500" />
                        <span>{currentReview.likes} people found this helpful</span>
                      </div>
                    </div>

                    {currentReview.beforeAfter && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <Camera size={14} />
                        Before/After photos available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-600 hover:text-pink-600 border border-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-gray-600 hover:text-pink-600 border border-gray-100"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-500 ${
                index === currentTestimonial 
                  ? 'scale-105 z-10' 
                  : 'hover:scale-105 opacity-80 hover:opacity-100'
              }`}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden group">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Mini Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-1">
                        {testimonial.name}
                        {testimonial.verified && <Verified size={14} className="text-green-500" />}
                      </h4>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Mini Stars */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Mini Review */}
                  <p className="text-sm text-gray-700 line-clamp-3">
                    "{testimonial.text.substring(0, 100)}..."
                  </p>

                  {/* Product Used */}
                  <div className="mt-4 text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full inline-block">
                    {testimonial.productUsed}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`transition-all duration-300 ${
                index === currentTestimonial
                  ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full'
                  : 'w-3 h-3 bg-pink-200 hover:bg-pink-400 rounded-full hover:scale-125'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Join Our Community of Satisfied Customers
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-white/90">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-white/90">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
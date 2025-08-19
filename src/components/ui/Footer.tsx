import {
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  EIMAAN
                </h3>
                <p className="text-sm text-pink-400 font-medium">
                  Innovative Skin Care
                </p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Premium skincare that celebrates natural beauty and empowers
                confidence.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-pink-400 hover:bg-pink-600/20 transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-600/20 transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-sky-400 hover:bg-sky-600/20 transition-all"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About Us", "Products", "Reviews", "Blog", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                {[
                  "Face Care",
                  "Body Care",
                  "Anti-Aging",
                  "Serums",
                  "Moisturizers",
                ].map((product, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" size={16} />
                  <span className="text-gray-300 text-sm">
                    +234 8064474739
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={16} />
                  <span className="text-gray-300 text-sm">
                    eimaaninnovativeskincare@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={16} />
                  <span className="text-gray-300 text-sm">Katsina, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024{" "}
              <span className="text-pink-400 font-medium">
                Eimaan Innovative Skin Care
              </span>
              . All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms", "Returns", "FAQ"].map(
                (link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

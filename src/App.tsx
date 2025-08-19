import WhatsappButton from "./components/elements/WhatsappButton";
import Header from "./components/ui/Header";
import About from "./components/ui/About";
import Products from "./components/ui/Products";
import Testimonials from "./components/ui/Testimonials";
import Cta from "./components/ui/Cta";
import Footer from "./components/ui/Footer";

const EimaanLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Floating WhatsApp Button */}
      <WhatsappButton />

      {/* Hero Section */}
      <Header />

      {/* About Section */}
      <About />

      {/* Products Section */}
      <Products />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EimaanLandingPage;

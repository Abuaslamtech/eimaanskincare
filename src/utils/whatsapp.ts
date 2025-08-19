type Product = {
  name: string;
  price: string | number;
};

const whatsappNumber = "+2348064474739"; // Replace with actual number
export const generateWhatsAppLink = (product:Product) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in purchasing the ${product.name} for ${product.price}. Can you assist me with my order?`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

export const generalWhatsAppLink = () => {
  const message = encodeURIComponent(
    "Hi! I'd like to know more about your skincare products. Can you help me choose the right products for my skin?"
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

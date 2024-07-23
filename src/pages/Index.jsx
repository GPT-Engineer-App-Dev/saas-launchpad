import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-4 py-12 text-white">
      <div className={`text-center max-w-4xl transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Welcome to InnovateSaaS
        </h1>
        <p className="text-2xl mb-8 text-gray-200">Revolutionize your business with our cutting-edge SaaS solution</p>
        <div className="space-y-6 mb-10">
          {['Boost productivity', 'Streamline workflows', 'Scale effortlessly'].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center space-x-2 animate-pulse">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <p className="text-xl">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 space-x-6">
          <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all duration-200">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200">
            Learn More
          </Button>
        </div>
      </div>
      <div className={`mt-16 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-200">Trusted by Industry Leaders</h2>
        <div className="flex justify-center space-x-12">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-opacity-30">
              <span className="text-3xl">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
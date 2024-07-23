import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to InnovateSaaS</h1>
        <p className="text-xl mb-8">Revolutionize your business with our cutting-edge SaaS solution</p>
        <div className="space-y-4">
          <p className="text-lg">✓ Boost productivity</p>
          <p className="text-lg">✓ Streamline workflows</p>
          <p className="text-lg">✓ Scale effortlessly</p>
        </div>
        <div className="mt-10 space-x-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Trusted by Industry Leaders</h2>
        <div className="flex justify-center space-x-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
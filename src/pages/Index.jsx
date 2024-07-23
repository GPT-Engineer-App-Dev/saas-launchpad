import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-4 py-12 text-white">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          About InnovateSaaS
        </h1>
        <p className="text-2xl mb-12 text-gray-200">Empowering businesses through innovative SaaS solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">To revolutionize the way businesses operate by providing cutting-edge SaaS solutions that drive efficiency, productivity, and growth.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">To become the global leader in SaaS innovation, empowering organizations of all sizes to reach their full potential in the digital age.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['CEO', 'CTO', 'COO', 'CMO'].map((role, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-2"></div>
                <p className="text-lg font-semibold">{role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <ul className="text-left inline-block">
            {['Innovation', 'Customer-Centric', 'Integrity', 'Collaboration', 'Excellence'].map((value, index) => (
              <li key={index} className="text-xl mb-2 flex items-center">
                <span className="mr-2 text-yellow-400">✓</span> {value}
              </li>
            ))}
          </ul>
        </div>

        <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all duration-200">
          Join Our Team
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 h-screen">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-4xl font-bold text-white">Welcome to SaaS Landing Page</h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
}
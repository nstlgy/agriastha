import { assets } from "../../assets/assets";

function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative">
      <div className="mb-12">
        <img
          src={assets.agriculture_field}
          alt=""
          className="w-full h-[70vh] object-cover brightness-70 rounded-xl shadow-lg"
        />
      </div>
      <h1 className="text-5xl font-bold text-center mb-6 tracking-tight">
        Welcome to Agriastha
      </h1>
      <h2 className="text-2xl text-center mb-8 text-gray-700">
        Indigeneous Development in Agriculture
      </h2>
      <p className="text-center mb-8 text-lg max-w-3xl mx-auto leading-relaxed text-gray-600">
        At Agriastha, we are dedicated to advancing sustainable agricultural
        practices that enhance productivity and protect the environment. Join us
        in our mission to create a more sustainable future for generations to
        come.
      </p>
      <p className="text-green-600 text-center font-semibold text-xl italic">
        "Harvesting Trust, Cultivating the future"
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <Hero />
      </main>
    </div>
  );
}

export default Home;

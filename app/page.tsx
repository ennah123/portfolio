import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex-1 bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <Hero/>
        <Hero/>
      </div>
    </div>
  );
}
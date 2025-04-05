import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg flex items-center justify-between px-6 py-4 z-50">
      <div className="flex items-center space-x-6">
        <a href="#" className="text-white font-semibold">
          Home
        </a>
        <a href="#" className="text-white font-semibold">
          About
        </a>
        <a href="#" className="text-white font-semibold">
          Features
        </a>
      </div>
      <div className="text-white text-xl font-bold">Aceternity UI</div>
      <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700">
        Connect Wallet
      </Button>
    </nav>
  );
}

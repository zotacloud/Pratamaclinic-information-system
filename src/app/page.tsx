import Button from "@/components/ui/Button";
import { APP_CONFIG } from "@/config/app";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        🏥 {APP_CONFIG.name}
      </h1>

      <p className="text-gray-600 text-lg mb-8">{APP_CONFIG.description}</p>

      <Button>Get Started</Button>
    </main>
  );
}

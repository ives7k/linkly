import Link from "next/link";

export const metadata = {
  title: "LINKLY | Preços",
  description:
    "Planos simples e transparentes para todos os criadores",
};

export default function Pricing() {
  return (
    <div className="min-h-screen py-16">
      <main className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
              Planos e Preços
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece gratuitamente e escale conforme você cresce
          </p>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-primary-200 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gradient-primary text-white px-6 py-2 rounded-bl-2xl font-bold">
              Grátis para sempre
            </div>
            
            <div className="mt-8">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Plano Gratuito</h2>
              <p className="text-gray-600 mb-8">Tudo que você precisa para começar</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Links ilimitados</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">URL personalizada</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Analytics básico</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Personalização completa</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Suporte por email</span>
                </div>
              </div>

              <Link
                href="/account"
                className="block w-full text-center bg-gradient-primary hover:bg-gradient-primary-hover text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>


        {/* Info adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de mais recursos? Entre em contato!
          </p>
          <Link
            href="/contact"
            className="text-primary-600 hover:text-primary-700 font-semibold underline"
          >
            Fale conosco →
          </Link>
        </div>
      </main>
    </div>
  );
}

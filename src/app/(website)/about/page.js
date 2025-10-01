import Link from "next/link";

export const metadata = {
  title: "LINKLY | Sobre",
  description:
    "Conheça a LINKLY - a plataforma completa para unificar todos os seus links",
};

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <main className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
              LINKLY
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            LINKLY é uma plataforma moderna e intuitiva projetada para simplificar sua presença online. 
            Crie uma página personalizada e compartilhável que reúne todos os seus links importantes em um só lugar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🔐</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Seguro e Simples</h3>
            <p className="text-gray-600">
              Autenticação segura com Google. Configure sua conta em segundos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Totalmente Personalizável</h3>
            <p className="text-gray-600">
              Customize seus links, botões e perfil com visualização em tempo real.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Analytics Poderoso</h3>
            <p className="text-gray-600">
              Acompanhe cliques e engajamento da sua audiência com métricas detalhadas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Rápido e Otimizado</h3>
            <p className="text-gray-600">
              Performance e SEO otimizados para garantir que sua página se destaque.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary hover:bg-gradient-primary-hover text-white font-bold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            ← Voltar para home
          </Link>
        </div>
      </main>
    </div>
  );
}

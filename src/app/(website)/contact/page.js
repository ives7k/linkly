import Link from "next/link";
import Logo from "@/components/Logo";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export const metadata = {
  title: "LINKLY | Contato",
  description:
    "Entre em contato com a equipe LINKLY",
};

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <main className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <Logo className="scale-150" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Tem dúvidas, sugestões ou precisa de ajuda? Estamos aqui para você!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-3">Email</h3>
            <p className="text-gray-600 text-center mb-4">
              Responderemos em até 24 horas
            </p>
            <a
              href="mailto:contato@linkly.com"
              className="block text-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              contato@linkly.com
            </a>
          </div>

          {/* Social */}
          <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-center mb-3">Redes Sociais</h3>
            <p className="text-gray-600 text-center mb-6">
              Siga-nos e fique por dentro
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://twitter.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size="1.5em" />
              </a>
              <a
                href="https://facebook.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size="1.5em" />
              </a>
              <a
                href="https://github.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size="1.5em" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size="1.5em" />
              </a>
            </div>
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

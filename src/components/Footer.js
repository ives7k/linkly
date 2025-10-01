import Link from 'next/link';
import Logo from '@/components/Logo';
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Logo */}
          <Logo className="mb-4 md:mb-0" />

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <FaTwitter size="1.5em" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <FaFacebookF size="1.5em" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaGithub size="1.5em" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <FaLinkedinIn size="1.5em" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center text-sm text-gray-500 pt-6 border-t border-gray-200">
          © {new Date().getFullYear()} LINKLY. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

"use client"
import LogoutButton from "@/components/buttons/LogoutButton";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button onClick={toggleMenu} className="text-gray-700 text-2xl hover:text-primary-600 transition-colors">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <nav className="flex flex-col items-center gap-4 py-6">
            <Link 
              href="/about" 
              className="text-gray-700 font-medium hover:text-primary-600 transition-colors" 
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-700 font-medium hover:text-primary-600 transition-colors" 
              onClick={toggleMenu}
            >
              Preços
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 font-medium hover:text-primary-600 transition-colors" 
              onClick={toggleMenu}
            >
              Contato
            </Link>
            {!!session ? (
              <>
                <Link
                  href="/account"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white bg-gradient-primary hover:bg-gradient-primary-hover font-bold shadow-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Minha Conta
                </Link>
                <LogoutButton className="flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 font-bold transition-all duration-300" />
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white bg-gradient-primary hover:bg-gradient-primary-hover font-bold shadow-lg transition-all duration-300"
                onClick={toggleMenu}
              >
                Entrar
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

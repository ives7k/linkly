"use client"
import LogoutButton from "@/components/buttons/LogoutButton";
import Logo from "@/components/Logo";
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
      <button onClick={toggleMenu} className="text-gray-700 text-2xl p-2 hover:text-primary-600 transition-colors">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
          
          {/* Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 animate-slide-in">
            <div className="flex flex-col h-full">
              {/* Header do menu */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Logo />
                <button onClick={toggleMenu} className="text-gray-700 text-2xl hover:text-primary-600 transition-colors">
                  <FaTimes />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2 p-6 flex-grow">
                <Link 
                  href="/about" 
                  className="text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all" 
                  onClick={toggleMenu}
                >
                  Sobre
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all" 
                  onClick={toggleMenu}
                >
                  Preços
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all" 
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </nav>

              {/* Botões de ação */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                {!!session ? (
                  <>
                    <Link
                      href="/account"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary hover:bg-gradient-primary-hover text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      Minha Conta
                    </Link>
                    <div onClick={toggleMenu}>
                      <LogoutButton className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 font-bold transition-all duration-300" />
                    </div>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary hover:bg-gradient-primary-hover text-white font-bold rounded-xl shadow-lg transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    Entrar
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;

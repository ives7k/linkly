import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/buttons/LogoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logo from "@/components/Logo";
import HamburgerMenu from "@/components/HamburgerMenu";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden sm:flex justify-center gap-8 text-slate-600 text-sm flex-grow font-medium">
          <Link href="/about" className="hover:text-indigo-600 transition-colors">Sobre</Link>
          <Link href="/pricing" className="hover:text-indigo-600 transition-colors">Preços</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contato</Link>
        </nav>

        {/* Session/Login Buttons for Desktop */}
        <div className="hidden sm:flex items-center gap-4 text-sm">
          {!!session ? (
            <>
              <Link
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                href="/account"
              >
                Minha Conta
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              href="/login"
            >
              Entrar
            </Link>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <HamburgerMenu session={session} />

        {/* Mobile Navigation Links (Hidden when Hamburger Menu is used) */}
        {/* <nav className="w-full sm:hidden flex justify-center gap-10 font-bold text-slate-500 text-sm mt-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav> */}
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link 
      href="/" 
      className={`flex items-center group ${className}`}
    >
      <div className="relative">
        {/* Logo com tipografia estilizada */}
        <span className="font-poppins font-extrabold text-3xl tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
            LINKLY
          </span>
        </span>
        {/* Detalhe decorativo */}
        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </Link>
  );
}


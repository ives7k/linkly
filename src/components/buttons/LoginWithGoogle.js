'use client';
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/account' })}
      className="bg-white border-2 border-gray-200 shadow-md text-center w-full py-4 flex gap-3 items-center justify-center rounded-xl hover:bg-gray-50 hover:border-indigo-300 transition-all duration-300 font-semibold">
      <FontAwesomeIcon icon={faGoogle} className="h-6 text-red-500" />
      <span className="text-gray-700">Entrar com Google</span>
    </button>
  );
}

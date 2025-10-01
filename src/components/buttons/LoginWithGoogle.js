'use client';
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/account' })}
      className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Entrar com Google</span>
    </button>
  );
}

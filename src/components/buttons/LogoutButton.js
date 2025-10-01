'use client';
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signOut} from "next-auth/react";

export default function LogoutButton({
  className = 'flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 font-semibold transition-all duration-300',
  iconLeft = false,
  iconClasses = '',
}) {
  return (
    <button
      className={className}
      onClick={() => signOut()}>
      {iconLeft && (
        <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
      )}
      <span>Sair</span>
      {!iconLeft && (
        <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
      )}
    </button>
  );
}

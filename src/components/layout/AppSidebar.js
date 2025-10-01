'use client';
import LogoutButton from "@/components/buttons/LogoutButton";
import {faFileLines} from "@fortawesome/free-regular-svg-icons";
import {faArrowLeft, faChartLine} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <nav className="inline-flex mx-auto flex-col text-center mt-8 gap-2">
      <Link
        href={'/account'}
        className={
          "flex gap-4 p-3 px-4 rounded-xl font-medium transition-all "
          + (path === '/account' 
            ? 'bg-primary-100 text-primary-600' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600')
        }>
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faFileLines}
          className={'w-5 h-5'}
        />
        <span>Minha Página</span>
      </Link>
      <Link
        href={'/analytics'}
        className={
          "flex gap-4 p-3 px-4 rounded-xl font-medium transition-all "
          + (path === '/analytics' 
            ? 'bg-primary-100 text-primary-600' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600')
        }>
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faChartLine}
          className={'w-5 h-5'}
        />
        <span>Analytics</span>
      </Link>
      <LogoutButton
        iconLeft={true}
        className={'flex gap-4 items-center text-gray-600 p-3 px-4 rounded-xl hover:bg-gray-100 hover:text-primary-600 font-medium transition-all'}
        iconClasses={'w-5 h-5'}
      />
      <Link href={'/'} className="flex items-center justify-center gap-2 text-sm text-gray-500 border-t border-gray-200 pt-4 mt-2 hover:text-primary-600 transition-colors font-medium">
        <FontAwesomeIcon icon={faArrowLeft} className={'w-3 h-3'} />
        <span>Voltar ao site</span>
      </Link>
    </nav>
  );
}

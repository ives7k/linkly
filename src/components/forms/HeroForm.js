'use client';

import {signIn} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";

export default function HeroForm({user}) {
  const router = useRouter();
  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector('input');
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push('/account?desiredUsername='+username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        await signIn('google');
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center bg-white shadow-soft hover:shadow-lg transition-all rounded-xl overflow-hidden border-2 border-primary-100 hover:border-primary-200">
      <span className="py-4 pl-6 text-gray-800 font-medium">
        linkly.run/
      </span>
      <input
        type="text"
        className="py-4 outline-none font-medium text-gray-800 placeholder:text-gray-400"
        style={{backgroundColor:'white', marginBottom:0, paddingLeft:0}}
        placeholder="seunome"/>
      <button
        type="submit"
        className="bg-gradient-primary hover:bg-gradient-primary-hover text-white font-bold py-4 px-8 whitespace-nowrap transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105">
        Cadastrar Grátis
      </button>
    </form>
  );
}

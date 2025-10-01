import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Carousel from "@/components/Carousel";
import GridContainer from "@/components/GridContainer";
import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

const imageUrls = [
  "/assets/polly.png",
  "/assets/preview.png",
  "/assets/doggie.png",
  "/assets/manfred.png",
  "/assets/walter.png",
  "/assets/model.png",
  "/assets/cat.png",
  "/assets/model1.png",

];
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className="pt-20 pb-16 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div className="max-w-2xl mb-8 md:mb-0 md:mr-12">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
            <span className="text-indigo-700 font-semibold text-sm">✨ Tudo em um único lugar</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-6">
            Todos os seus links em uma página
          </h1>
          <h2 className="text-gray-600 text-xl mt-6 mb-8 leading-relaxed">
            Compartilhe seus links, redes sociais, contatos e muito mais de forma simples e elegante
          </h2>
          <HeroForm user={session?.user} />
        </div>
        <Carousel images={imageUrls} />

        {/* <Image
          src={'/assets/preview.png'}
          alt="banner image"
          width={290} // Adjust the width as needed
          height={290} // Adjust the height to maintain the aspect ratio
          className="rounded-2xl border-2 shadow-gray-500/20 shadow-lg hover:shadow-2xl transition-shadow"
        /> */}
      </section>
      
      {/* Seção de benefícios */}
      <div className="mt-24 text-center max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
          <span className="text-purple-700 font-semibold text-sm">💡 Solução completa</span>
        </div>
        <h1 className="mb-6 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          Nunca mais mude o link da sua bio
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          LINKLY resolve o problema mais irritante das redes sociais: ter apenas um link na bio. 
          Perfeito para criadores de conteúdo, empresas e influenciadores que querem crescer, 
          engajar e monetizar sua audiência de forma simples e profissional.
        </p>
      </div>
      
      <GridContainer />
      
      {/* Seção CTA */}
      <div className="mt-24 text-center max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
          <span className="text-indigo-700 font-semibold text-sm">🚀 Rápido e fácil</span>
        </div>
        <h1 className="mb-6 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Transforme sua bio em um mini-site
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Em segundos, crie um espaço único onde seus seguidores podem descobrir todo o seu conteúdo, 
          conectar-se com você em outras plataformas e apoiar seu trabalho com apenas um link.
        </p>
        <Link
          href="/account"
          className="inline-flex items-center gap-2 px-8 py-4 shadow-lg rounded-xl text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 font-bold text-lg transform hover:scale-105 transition-all duration-300"
        >
          Começar agora — é grátis
        </Link>
      </div>
      <ImageGrid images={imageUrls} /> {/* Add the ImageGrid component */}

    </main>
  );
}

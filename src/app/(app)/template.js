import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AppSidebar from "@/components/layout/AppSidebar";
import Logo from "@/components/Logo";
import { Page } from "@/models/Page";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata = {
  title: "LINKLY | Dashboard",
  description: "Gerencie sua página LINKLY",
};

export default async function AppTemplate({ children, ...rest }) {
  const headersList = headers();
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({ owner: session.user.email });
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Toaster />
        <main className="md:flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <label
            htmlFor="navCb"
            className="md:hidden ml-6 mt-6 p-3 rounded-xl bg-white shadow-soft inline-flex items-center gap-2 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-700" />
          </label>
          <input id="navCb" type="checkbox" className="hidden" />
          <label
            htmlFor="navCb"
            className="hidden backdrop fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
          ></label>
          <aside className="bg-white w-64 p-6 shadow-lg border-r border-gray-100 fixed md:static -left-64 top-0 bottom-0 z-20 transition-all">
            <div className="sticky top-0 pt-4">
              <div className="flex justify-center mb-6">
                <Logo />
              </div>
              <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto mb-4 ring-4 ring-primary-100">
                <Image
                  src={session.user.image}
                  width={256}
                  height={256}
                  alt={"avatar"}
                />
              </div>
              {page && (
                <Link
                  target="_blank"
                  href={"/" + page.uri}
                  className="text-center mb-6 flex gap-2 items-center justify-center text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors group"
                >
                  <span className="text-gray-400">linkly.run/</span>
                  <span className="group-hover:underline font-bold">{page.uri}</span>
                </Link>
              )}
              <div className="text-center">
                <AppSidebar />
              </div>
            </div>
          </aside>
          <div className="grow">{children}</div>
        </main>
      </body>
    </html>
  );
}

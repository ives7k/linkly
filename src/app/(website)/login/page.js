import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export const metadata = {
  title: 'LINKLY | Login',
  description: 'Entre na sua conta LINKLY',
}
export default function LoginPage() {
  return (
    <div>
      <div className="p-4 max-w-xs mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Entrar
        </h1>
        <p className="text-center mb-10 text-gray-500">
          Entre na sua conta usando o Google
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
}

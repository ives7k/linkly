import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export const metadata = {
  title: 'LINKLY | Login',
  description: 'Entre na sua conta LINKLY',
}
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="p-8 max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Bem-vindo de volta!
          </h1>
          <p className="text-gray-600">
            Entre na sua conta para continuar
          </p>
        </div>
        <LoginWithGoogle />
        <p className="text-center text-sm text-gray-500 mt-6">
          Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
}

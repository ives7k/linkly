import {useFormStatus} from 'react-dom';

export default function SubmitButton({children, className=''}) {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={"bg-gradient-primary hover:bg-gradient-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 mx-auto w-full flex gap-2 items-center justify-center rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 " + className}
    >
      {pending && (
        <span>Salvando...</span>
      )}
      {!pending && children}
    </button>
  );
}

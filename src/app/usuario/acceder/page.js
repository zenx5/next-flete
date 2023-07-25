import TextField from "@/components/TextField";

export default function LoginPage() {

    return <div className="flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-center text-blue-500 border-4 border-blue-500 rounded-full p-4 self-center">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <span className="flex flex-col border-t border-blue-500 mt-4">
            <TextField label="Email" type="email" placeholder="example@mail.com"/>
            <TextField label="Contraseña" type="password" />
            <button className="text-blue-500 border border-blue-500 p-3 my-4 rounded">Acceder</button>
            <a href="#" className="text-blue-500 text-center border border-blue-500 p-3  rounded">Registro</a>
        </span>
    </div>
}
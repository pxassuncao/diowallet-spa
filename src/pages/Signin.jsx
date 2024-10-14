import { Link } from 'react-router-dom';
import logo from'../assets/LogoPrata.png';
import Input from '../components/Input';
import Button from '../components/button';

export default function Signin(){
    
    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900
        rounded p-8 w-[35rem] h-[35rem]">
        <img src={logo} alt='logo' className='w-64'/>
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <Button type="submit" text="ENVIAR"/>              
            </form>
            <p className='text-white text-2xl'>Não tem uma conta cadastrada?<Link to="/cadastro" className='text-sky-400 hover:text-sky-600'>Criar conta</Link>{""}
            </p>
        </div>
    );
}
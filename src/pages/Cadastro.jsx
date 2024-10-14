
import logo from'../assets/LogoPrata.png';
import Input from"../components/Input";
import Button from "../components/button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function Cadastro(){
    return(
        <div className="flex flex-col items-center justify-around bg-zinc-900
        rounded p-8 w-[35rem] h-[35rem] relative">
        <Link to="/signin">
        <BiArrowBack className="text-white absolute top-3 left-3 text-2xl"/>
        </Link>

        <img src={logo} alt='logo' className='w-64'/>
        <form className="flex flex-col items-center justify-center gap-4 w-full text-2xl  hover:text-sky-600">
            <Input type="text" placeholder="full name"/> 
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Senha"/>
            <Input type="password" placeholder="Confirme a senha"/>
            <Button type="submit" text="CADASTRO"/>
        </form>   
        </div>
    );
}
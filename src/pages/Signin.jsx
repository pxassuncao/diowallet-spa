import { Link } from 'react-router-dom';
import logo from'../assets/LogoPrata.png';
import Input from '../components/Input';
import Button from '../components/Button';
import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod"
import ErrorInput from '../components/ErrorInput';
import { signinSchema } from '../schemas/SigninSchema';



export default function Signin(){
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(signinSchema)});

    function handleSubmitForm(data){
        console.log("Form submitted:",data)
    }
    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900
        rounded p-8 w-[35rem] h-[35rem]">
        <img src={logo} alt='logo' className='w-64'/>
            <form onSubmit={handleSubmit(handleSubmitForm)}className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input
                type="email"
                placeholder="Email"
                register={register}
                name="email" />
                {errors.email && (
                <ErrorInput text={errors.email.message}></ErrorInput>)}
                <Input
                type="password"
                placeholder="Senha"
                register={register}
                name="password"/>
                {errors.password &&(
                <ErrorInput text={errors.password.message}></ErrorInput>)}

                <Button type="submit" text="ENVIAR"/>              
            </form>
            <p className='text-white text-2xl'>Não tem uma conta cadastrada?<Link to="/cadastro" className='text-sky-400 hover:text-sky-600'>Criar conta</Link>{""}
            </p>
        </div>
        );
    }
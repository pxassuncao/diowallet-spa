
import logo from '../assets/LogoPrata.png';
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from '../components/ErrorInput';
import { cadastroSchema } from '../schemas/CadastroSchema';
import { cadastro } from '../services/user';

export default function Cadastro() {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
        resolver: zodResolver(cadastroSchema),
    });

    const navigate = useNavigate();

    async function  handleSubmitForm(data) {
       
        try {
            await cadastro(data);
            navigate("/signin");
        } catch (error) {
            console.error("Erro na API:", error.response?.data || error.message);
        }
    }



    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900
        rounded p-8 w-[35rem] h-[35rem] relative">
            <Link to="/signin">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
            </Link>

            <img src={logo} alt='logo' className='w-64' />
            <form onSubmit={handleSubmit(handleSubmitForm)} 
                className="flex flex-col items-center justify-center gap-4 w-full text-2xl hover:text-sky-600">
                
                <Input
                    type="text"
                    placeholder="Nome completo"
                    register={register}
                    name="name" />
                {errors.name && <ErrorInput text={errors.name.message} />}

                <Input
                    type="email"
                    placeholder="Email"
                    register={register}
                    name="email" />
                {errors.email && <ErrorInput text={errors.email.message} />}

                <Input
                    type="password"
                    placeholder="Senha"
                    register={register}
                    name="password" />
                {errors.password && <ErrorInput text={errors.password.message} />}

                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    register={register}
                    name="confirmePassword" />
                {errors.confirmePassword && <ErrorInput text={errors.confirmePassword.message} />}

                <Button type="submit" text="CADASTRO" />
            </form>
        </div>
    );
}

import z from "zod";



export const cadastroSchema = z.object({
    name: z.string()
        .min(3, "O nome precisa ter no mínimo 03 caracteres")
        .transform((name) =>
            name.trim()
                .split(" ")
                .map(word => word[0].toLocaleUpperCase() + word.substring(1))
                .join(" ")
        ),
    email: z.string()
        .email("Email inválido")
        .nonempty("O email é obrigatório.")
        .toLowerCase(),
    password: z.string()
        .min(6, "A senha deve ter no mínimo 06 caracteres"),
    confirmePassword: z.string()
})
    .refine((data) => data.password === data.confirmePassword, {
        message: "As senhas não correspondem",
        path: ["confirmePassword"],
    });
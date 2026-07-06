import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: 'Informe o nome' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    password: z.string().min(6, { message: 'Senha deve ter pelo menos 6 dígitos' }),
    passwordConfirm: z.string({ message: 'Confirme a senha' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Senhas não coincidem',
    path: ['passwordConfirm'],
  });

import { useId, type SubmitEvent } from 'react';
import { toast } from 'sonner';
import { FormField } from '@/components/ui/FormField';
import { AuthForm } from '@/components/ui/AuthForm';
export function RegisterForm() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log({ username, email, password });
    toast.success('¡Registro exitoso!', {
      description: `Bienvenido, ${username}!`,
      position: 'top-right',
      classNames: {
        toast: '!bg-tertiary !text-white !font-body',
        description: '!text-white',
      },
    });
  };

  return (
    <>
      <AuthForm
        title="Regístrate"
        submitLabel="Registrarse"
        onSubmit={handleSubmit}
      >
        <FormField
          id={usernameId}
          label="Nombre de usuario"
          type="text"
          placeholder="pepegamer"
          name="username"
          required
        />
        <FormField
          id={emailId}
          label="Correo electrónico"
          type="email"
          placeholder="user@example.com"
          required
          name="email"
        />
        <FormField
          id={passwordId}
          label="Contraseña"
          type="password"
          placeholder="***********"
          name="password"
        />
      </AuthForm>
    </>
  );
}

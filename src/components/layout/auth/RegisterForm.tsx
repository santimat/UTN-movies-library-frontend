import { useId, type SubmitEvent } from 'react';
import { toast } from 'sonner';
import { FormField } from '@/components/ui/FormField';
import { AuthForm } from '@/components/ui/AuthForm';
import { REGISTER_FIELDS } from '@/lib/constants';
import { validateService } from '@/services/validateService';
import { useAuthStore } from '@/stores/useAuthStore';

export function RegisterForm() {
  const { register } = useAuthStore();
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (validateService.areMissingFields(formData, REGISTER_FIELDS)) return;
    const error = await register(formData);
    console.log(error);
    if (error) return toast.error(error.error);

    toast.success('Registro exitoso. Ahora puedes iniciar sesión.');
    event.target.reset();
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
          required={false}
        />
        <FormField
          id={emailId}
          label="Correo electrónico"
          type="email"
          placeholder="user@example.com"
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

import { useState, type SubmitEvent } from 'react';
import { sileo } from 'sileo';
import { REGISTER_FIELDS } from '@/shared/utils/constants';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { FormField } from '@/shared/components/ui/FormField';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { getMissingFields } from '@/shared/utils/checkMissingFields';
import { type AppError } from '@/shared/types';

export function RegisterForm() {
  const register = useAuthStore((s) => s.register);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const missingFields = getMissingFields(registerData, REGISTER_FIELDS);

    if (missingFields) {
      return sileo.warning({
        title: 'Campos faltantes',
        description: `Por favor, completa ${missingFields}`,
      });
    }

    try {
      await register(registerData);
      sileo.success({
        title: 'Registro exitoso',
        description: 'Ahora puedes iniciar sesión con tus credenciales.',
      });
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Error al registrarse',
        description: error,
      });
    } finally {
      form.reset();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    const newValue = {
      [name]: value,
    };
    setRegisterData((prev) => ({ ...prev, ...newValue }));
  };
  return (
    <>
      <AuthForm
        title="Regístrate"
        submitLabel="Registrarse"
        onSubmit={handleSubmit}
        className='[&>input[type="submit"]]:bg-tertiary'
      >
        <FormField
          label="Nombre de usuario"
          type="text"
          placeholder="pepegamer"
          name="name"
          onChangeValue={handleChange}
        />
        <FormField
          label="Correo electrónico"
          type="email"
          placeholder="user@example.com"
          name="email"
          required={false}
          onChangeValue={handleChange}
        />
        <FormField
          label="Contraseña"
          type="password"
          placeholder="***********"
          name="password"
          onChangeValue={handleChange}
        />
      </AuthForm>
    </>
  );
}

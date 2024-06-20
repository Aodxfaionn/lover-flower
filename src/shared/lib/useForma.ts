import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { Fields } from 'shared/model/types';

export const useForma = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Fields>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
    reset();
  };

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  };
};
import { SubmitHandler, useForm } from 'react-hook-form';
import { Fields } from 'types/types';

export const useForma = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Fields>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Fields> = (data, event) => {
    const successMess = event?.target.querySelector('.successSend');
    if (successMess) successMess.classList.add('visible');

    console.log(data);
    reset();
  };

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  };
};
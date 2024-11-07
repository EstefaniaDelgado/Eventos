import { useForm } from 'react-hook-form';
import styles from './MyInfo.module.css';
import { useEffect } from 'react';

const USER_INFO = 'user_info';

const MyInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //para preservar la info
  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_INFO)) || {};
      setValue('name', userData?.name);
      setValue('address', userData?.address);
      setValue('age', userData?.age);
    } catch (error) {
      console.log('Ha ocurrido un error', error);
    }
  }, []);

  const handleSubmitForm = (data) => {
    try {
      localStorage.setItem(USER_INFO, JSON.stringify(data));
      alert('Contacto almacenado exitosamente!');
      reset();
    } catch (error) {
      alert('Ha ocurrido un error');
    }
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
      <label htmlFor="">
        Name
        <input type="text" {...register('name', { required: true })} />
      </label>
      <label>
        Edad
        <input type="number" {...register('age', { min: 18, max: 99 })} />
      </label>
      <label>
        Address
        <input type="text" {...register('address', { required: true })} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyInfo;

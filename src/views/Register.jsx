import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const USER_INFO = 'user_info';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
  });


  const handleSubmitForm = async(data) => {
     
    try {
      const userData = JSON.parse(localStorage.getItem(USER_INFO)) || {};
      setValue('firstName', userData?.firstName);
      setValue('email', userData?.email);
      setIsLoading(true);

      setTimeout(() => {
         setIsLoading(false);
        alert('Contacto almacenado exitosamente!');
        navigate('/profile/my-info')
      }, 3000);
      localStorage.setItem(USER_INFO, JSON.stringify(data));
    } catch (error) {
      alert('Ha ocurrido un error');
    }finally {
      reset();
    }
    
   
  };

  // console.log(errors);

  return (
    <>
      <div className="relative  text-center pt-12 md:pt-16 xl:pt-24 flex flex-col justify-center items-center gap-5 md:flex-1">
        <h2 className="absolute top-2 text-7xl font-extrabold text-gray-900 md:text-8xl xl:text-9xl">
          LOGIN
        </h2>
        <div className="z-50">
          <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
            [ Registrate con Nosotros!]
          </h3>
          <h2 className="z-50 font-semibold text-2xl md:text-3xl">
            Guardar tus eventos favoritos
          </h2>
        </div>
      </div>
      <div className="my-8 px-3 flex flex-col items-center justify-center dark">
        <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
          {/* <h2 class="text-2xl font-bold text-gray-200 mb-4">Product Feedback Form</h2> */}
          <form
            className="flex flex-col font-title"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <input
              placeholder="Primer Nombre"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-subtitlePrimary transition ease-in-out duration-150"
              type="text"
              {...register('name', { required: 'Este campo es obligatorio',pattern: {
                value: /^[A-Za-z]+$/, 
                message: 'Solo se permite el primer nombre y sin números',
              }, })}
            />
            {errors.name && (
              <p className="text-subtitlePrimary text-sm mb-2">
                {errors.name.message}
              </p>
            )}
            <input
              placeholder="Email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-subtitlePrimary transition ease-in-out duration-150"
              type="email"
              {...register('email', { required: 'Este campo es obligatorio', 
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                  message: 'Formato de correo inválido',
                },
               })}
            />
            {errors.email && (
              <p className="text-subtitlePrimary text-sm">
                {errors.email.message}
              </p>
            )}
            <button
              className="font-semibold font-sans tracking-widest bg-subtitlePrimary text-white py-2 px-4 rounded-md mt-4 hover:bg-transparent hover:border-2 transition ease-in-out duration-150"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Cargando...' : 'Registrarme'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;



// <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
// <label htmlFor="">
//   Name
//   <input type="text" {...register('name', { required: true })} />
// </label>
// <label>
//   Edad
//   <input type="number" {...register('age', { min: 18, max: 99 })} />
// </label>
// <label>
//   Address
//   <input type="text" {...register('address', { required: true })} />
// </label>
// <button type="submit">Submit</button>
// </form>

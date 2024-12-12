import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const USER_INFO = 'user_info';

const Register = () => {

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
    <>
     <div className="relative  text-center pt-12 md:pt-16 xl:pt-24 flex flex-col justify-center items-center gap-5 md:flex-1">
        <h2 className="absolute top-2 text-7xl font-extrabold text-gray-900 md:text-8xl xl:text-9xl">
         LOGIN
        </h2>
        <div className="z-50">
          <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
            [ Registrate con Nosotros!]
          </h3>
          {/* <h2 className="z-50 font-semibold text-2xl md:text-3xl">
            Guardar tus eventos favoritos
          </h2> */}
        </div>
      </div>
<div class="my-8 px-3 flex flex-col items-center justify-center dark">
  <div class="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
    {/* <h2 class="text-2xl font-bold text-gray-200 mb-4">Product Feedback Form</h2> */}
    <form class="flex flex-col font-title">
      <input placeholder="Nombre Completo" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-subtitlePrimary transition ease-in-out duration-150" type="text"/>
      <input placeholder="Email" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-subtitlePrimary transition ease-in-out duration-150" type="email"/>

      <button class="font-semibold font-sans tracking-widest bg-subtitlePrimary text-white py-2 px-4 rounded-md mt-4 hover:bg-transparent hover:border-2 transition ease-in-out duration-150" type="submit"><Link to={'/profile/my-info'}>Registrarme</Link></button>
    </form>
  </div>
</div>
    </>
  )
}

export default Register

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
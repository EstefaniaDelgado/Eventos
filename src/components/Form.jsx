import { useState } from 'react';

const Form = () => {

    //forma manual con un onChange por cada input
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleClickInputs = () => {
    setName('');
    setLastname('');
    setEmail('');
  };

  const handleSubmitInputs=(e)=>{
   e.preventDefault();
   console.log("Info user: ",{
    name,
    lastname,
    email
   })
  }

  //------------USANDO LA LIBRERIA REACT HOOK FORM------

  return (
    <form onSubmit={handleSubmitInputs}>
      <label>
        {' '}
        Nombre:
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <br />
      <label>
        {' '}
        Apellido:
        <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
      </label>
      <br />
      <label>
        {' '}
        Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
      </label>
      <div>
        <button type="button" onClick={handleClickInputs}>
          Limpiar{' '}
        </button>
        <button type="submit"> enviar</button>
      </div>
    </form>
  );
};

export default Form;

import { useState, useEffect, useRef } from "react";
import useResults from "../../state/useResults";
import Events from "../../components/Events";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import AboutEvent from "./components/AboutEvent";
import Slider from "../Home/components/Slider"
import Counter from "../Home/components/Schedule/components/Counter"

const Home = () => {

  const [searchTerm, setSeacrhTerm] = useState('');

  //Inicialemente se tiene la info de manera local con un hook creado
  //const { events, isLoading, error, fecthEvents, page } = useEventsData();

  //Despues la informacion esta en una Store de manera global
  const{data, isLoading, error, fetchEvents}=useResults();
  const events =data._embedded?.events || [];
  const page=data?.page || {};

  useEffect(()=>{
    fetchEvents()
  },[])

  const refComp = useRef();

  //console.log(refComp.current)
  

  const handleSearchEvent = (nameEvent) => {
    refComp.current.setSearch("")
    setSeacrhTerm(nameEvent);
    fetchEvents(`&keyword=${nameEvent}`)
  };

  const handlePageClick=({selected})=>{
  fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
  }

  
  //1.FORMA MOSTRAR LA CARGA Y LOS ERRORES
  // if(isLoading){
  //   return <div>Cardando resultados...</div>
  //  }
 
  //  if(error){
  //   return <div>Ocurrio un error</div>
  //  }

  //3.FORMA DE RENDERIZAR EL ERROR Y LA CARGA Y AGREGANDO PAGINACIÓN
  const renderEvents =()=>{
    if(isLoading){
    return <div>Cargando resultados...</div>
   }
 
   if(error){
    return <div>Ocurrio un error</div>
   }
   return (
    <div>
      <Events searchTerm={searchTerm} events={events}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={page.totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='pagination'
        pageClassName='page'
        nextClassName='next'
        previousClassName='previous'
        activeClassName='activePage'
      />
    </div>
   )
  }
 

  return (
    <>
      {/* <Form /> */}
      <div >
      {/* <Navbar onSearchEvent={handleSearchEvent} ref={refComp}/> */}
      {/* <NavbarMenu/> */}
      {/* <Link to={'/profile/my-info'}>Perfil Usuario</Link> */}
      </div>
      
    <Hero/>
    <Slider />
    <AboutEvent/>
    <Counter/>

    {/* 2. FORMA DE RENDERIZAR EL ERROR Y LA CARGA */}
     {/* {isLoading ? <div>Cargando resultados..</div>: <Events searchTerm={searchTerm} events={events}/>}
    {error && <div>Ocurrio un error</div> } */}
    {/* {renderEvents()} */}
    
    </>
  );
}

export default Home

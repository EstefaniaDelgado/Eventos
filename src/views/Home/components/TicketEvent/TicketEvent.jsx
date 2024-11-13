import MembershipCard from "./components/MembershipCard";

const benefits = [
  {
    quantity: 2,
    benefits: {
      benefit1: "Acceso a la aplicación móvil",
      benefit2: "Acceso a más de 1000 conversaciones",
      benefit3: "Acceso al piso de exhibición",
      benefit4: "Acceso a la lista de asistentes",
      benefit5: "Soporte por correo electrónico",
    },
    membershipLevel: "Standard",
    validity: "1 DÍA",
    price: 99.99,
  },
  {
    quantity: 3,
    benefits: {
      benefit1: "Acceso a la aplicación móvil",
      benefit2: "Acceso a más de 1000 conversaciones",
      benefit3: "Acceso al piso de exhibición",
      benefit4: "Acceso a la lista de asistentes",
      benefit5: "Soporte por correo electrónico",
    },
    membershipLevel: "Business",
    validity: "1 DÍA",
    price: 199.99,
  },
  {
    quantity: 4,
    benefits: {
      benefit1: "Acceso a la aplicación móvil",
      benefit2: "Acceso a más de 1000 conversaciones",
      benefit3: "Acceso al piso de exhibición",
      benefit4: "Acceso a la lista de asistentes",
      benefit5: "Soporte por correo electrónico",
    },
    membershipLevel: "Premium",
    validity: "2 DÍAS",
    price: 299.99,
  },
  {
    quantity: 5,
    benefits: {
      benefit1: "Acceso a la aplicación móvil",
      benefit2: "Acceso a más de 1000 conversaciones",
      benefit3: "Acceso al piso de exhibición",
      benefit4: "Acceso a la lista de asistentes",
      benefit5: "Soporte por correo electrónico",
    },
    membershipLevel: "Ultra",
    validity: "3 DÍAS",
    price: 399.99,
  },
];

const TicketEvent = () => {
  const benefitsCards = benefits.map((item, index) => (
    <MembershipCard key={index} data={item} />
  ));

  return (
    <section className="relative z-10 my-16 mx-5 w-11/12 max-w-[1200px] flex flex-col gap-11 md:pl-5 xl:mx-auto ">
      {/* <div className="pt-5 md:pt-8 lg:pt-16 xl:pt-24 flex flex-col justify-end items-start gap-5 md:flex-1 md:order-1 md:pl-5 xl:p-5 "> */}
      <div className="pt-12 md:pt-16 xl:pt-24 flex flex-col justify-end items-start gap-5 md:flex-1">
        {" "}
        {/* <h2 className="absolute top-3 text-5xl font-extrabold text-gray-900 md:text-7xl lg:text-8xl xl:text-9xl"> */}
        <h2 className="absolute top-2 text-7xl font-extrabold text-gray-900 md:text-8xl xl:text-9xl">
          TICKETS
        </h2>
        <div className="z-50">
          {/* <h3 className="font-light z-50 text-xl font-title text-subtitlePrimary-600"> */}
          <h3 className="font-light z-50 text-lg md:text-xl font-title text-subtitlePrimary">
            [ Elige un Ticket ]
          </h3>
          {/* <h2 className="z-50 font-semibold text-3xl ">¿Cuál es el precio?</h2> */}
          <h2 className="z-50 font-semibold text-2xl md:text-3xl ">
            ¿Cuál es el Precio?
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {benefitsCards}
      </div>
    </section>
  );
};

export default TicketEvent;

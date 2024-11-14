const MembershipCard = ({ data }) => {
  const benefitsList = Object.values(data.benefits).map((benefit, index) => (
    <li
      key={index}
      className={`flex text-center gap-2 ${
        index < data.quantity ? "text-white" : "text-gray-500"
      }`}
    >
      {/* <svg
        xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg> */}
      {benefit}
    </li>
  ));

  return (
    <div className="inline-block  rounded-xl shadow-xl my-2">
      <div className="relative rounded-t-xl h-44 flex flex-col gap-2 items-center justify-center bg-gray-900">
        <div className="absolute top-0 -translate-y-1/2 h-12 w-12 rounded-full bg-black"></div>
        <h2 className="text-5xl font-bold text-fuchsia-400 opacity-80">
          {data.price}
        </h2>
        <p className="text-subtitlePrimary font-medium">
          [ {data.membershipLevel} ]
        </p>
        <div className="cursor-default flex items-center justify-center gap-2 font-medium absolute z-50 bottom-0 translate-y-1/2 bg-blue-950 text-white px-4 py-2 rounded-2xl mt-4">
          <svg
            xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="green"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          {data.validity}
        </div>
      </div>
      <div className="relative rounded-b-xl py-12 px-5 flex flex-col gap-8 items-center bg-gray-950">
        {benefitsList}
        <button className="flex items-center justify-center gap-2 font-medium border border-subtitlePrimary absolute z-50 bottom-0 translate-y-1/2 bg-blue-950 text-white px-4 py-2 rounded-2xl mt-4">
          OBTENER TICKET
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;

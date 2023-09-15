import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const ItemCard = ({ element, handleClick }) => {
  //   console.log(element);

  const { cover, heading, description, price, credit } = element;

  return (
    <>
      {/* card starts  */}
      <div className=" p-2 bg-gray-50 border border-gray-200 rounded shadow cursor-pointer">
        {/* card image starts  */}
        <div className="cardImage  mb-3 ">
          <img src={cover} alt="" className=" w-full h-full " />
        </div>
        {/* card image ends */}

        {/* card heading starts  */}
        <div className="cardHeading  mb-3 ">
          <h5 className=" text-xl font-bold tracking-tight text-gray-800">
            {heading}
          </h5>
        </div>
        {/* card heading ends  */}

        {/* card description starts  */}

        <div className="cardDescription mb-4 ">
          <p className=" font-normal ">{description}</p>
        </div>

        {/* card description ends */}

        {/* card details starts  */}

        <div className="cardDetails  mb-4 flex justify-between items-center ">
          {/* left icon  */}
          <div className="iconContainer   text-xl lg:text-2xl ">
            <BiDollar />
          </div>
          {/* left icon  */}

          {/* price section  */}
          <div className="priceSection text-base lg:text-lg  text-gray-800 ">
            <p>
              Price : <span> {price} </span>
            </p>
          </div>
          {/* price section  */}

          {/* book icon  */}
          <div className="bookIconContainer   text-xl lg:text-2xl">
            <BsBook />
          </div>
          {/* book icon  */}

          {/* credit section  */}
          <div className="creditSection text-base lg:text-lg text-gray-800 ">
            <p>
              Credit : <span>{credit}</span>hr
            </p>
          </div>
          {/* credit section  */}

          {/*  */}
        </div>

        {/* card details ends */}

        {/* card button starts  */}
        <div
          className="cardButton px-3 py-2 text-center bg-blue-700 hover:bg-blue-800 rounded-md text-white active:scale-[.99]"
          onClick={() => handleClick(element)}
        >
          <button className=" font-medium ">Select</button>
        </div>

        {/* card button ends  */}
      </div>

      {/* card ends  */}
    </>
  );
};

export default ItemCard;

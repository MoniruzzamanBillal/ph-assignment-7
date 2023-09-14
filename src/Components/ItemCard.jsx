import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const ItemCard = () => {
  return (
    <>
      {/* card starts  */}
      <div class=" p-2 bg-gray-50 border border-gray-200 rounded shadow cursor-pointer">
        {/* card image starts  */}
        <div className="cardImage  mb-3 ">
          <img
            src="../public/images/Rectangle 2-1.png"
            alt=""
            className=" w-full h-full "
          />
        </div>
        {/* card image ends */}

        {/* card heading starts  */}
        <div className="cardHeading  mb-3 ">
          <h5 class=" text-xl font-bold tracking-tight text-gray-800">
            Introduction to C Programming
          </h5>
        </div>
        {/* card heading ends  */}

        {/* card description starts  */}

        <div className="cardDescription mb-4 ">
          <p class=" font-normal ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* card description ends */}

        {/* card details starts  */}

        <div className="cardDetails  mb-4 flex justify-between items-center ">
          {/* left icon  */}
          <div className="iconContainer  text-2xl ">
            <BiDollar />
          </div>
          {/* left icon  */}

          {/* price section  */}
          <div className="priceSection  text-xl text-gray-800 ">
            <p>Price : 25000</p>
          </div>
          {/* price section  */}

          {/* book icon  */}
          <div className="bookIconContainer  text-2xl">
            <BsBook />
          </div>
          {/* book icon  */}

          {/* credit section  */}
          <div className="creditSection  text-xl text-gray-800 ">
            <p>Credit : 2hr</p>
          </div>
          {/* credit section  */}

          {/*  */}
        </div>

        {/* card details ends */}

        {/* card button starts  */}
        <div className="cardButton px-3 py-2 text-center bg-blue-700 hover:bg-blue-800 rounded-md text-white active:scale-[.99]  ">
          <button class=" font-medium ">Select</button>
        </div>

        {/* card button ends  */}
      </div>

      {/* card ends  */}
    </>
  );
};

export default ItemCard;

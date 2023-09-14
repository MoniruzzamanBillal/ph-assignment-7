import React from "react";

const DataCard = () => {
  return (
    <>
      <div className="dataCardContainer ">
        <div className="dataCardWrapper  px-3 py-6 bg-white border border-gray-200 rounded-md shadow hover:bg-gray-100  ">
          {/* card top section starts  */}
          <div className="cardTop  pb-4 border-b border-gray-300 text-lg text-blue-700 font-semibold ">
            <h1>Credit Hour Remaining 7 hr</h1>
          </div>
          {/* card top section ends */}

          {/* card middle section starts  */}
          <div className="cardMid  mt-2 pb-4 border-b border-gray-300 ">
            <h1 className="  text-lg font-semibold mb-2 ">Course Name</h1>

            <ul className=" list-decimal list-inside text-gray-700  ">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          {/* card middle section ends */}

          {/* card credit hour section starts  */}
          <div className="cardCredit  py-3 border-b border-gray-300 font-semibold text-gray-900  ">
            <p>Total Credit Hour : 13</p>
          </div>
          {/* card credit hour section ends */}

          {/* card price section starts  */}

          <div className="cardPrice  pt-3 font-semibold text-gray-900  ">
            <p>Total Price : 48000 USD</p>
          </div>

          {/* card price section ends */}

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default DataCard;

import { useEffect, useState } from "react";

import "./App.css";
import ItemCard from "./Components/ItemCard";
import DataCard from "./Components/DataCard";

function App() {
  const [datas, setDatas] = useState([]);

  const handleClick = (element) => {
    // console.log("button clicked ");
    // console.log(element);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("blog.json");
      const responseData = await response.json();

      // console.log(responseData);

      setDatas(responseData);
    };

    fetchData();

    // console.log(datas);
  }, []);

  return (
    <>
      <h1 className="  text-3xl pt-5 pb-4 font-semibold text-center ">
        Course Registration
      </h1>

      <div className="bodyContainer bg-green-300 w-[98%] sm:w-[95%] m-auto flex justify-between ">
        {/* left card container starts  */}
        <div className="cardLeft  w-[78%] ">
          <div className="cardContainer bg-sky-400 grid grid-cols-3 gap-x-3 gap-y-4 ">
            {/*  */}
            {/* card section starts  */}
            {datas.map((element, ind) => (
              <>
                <ItemCard
                  key={ind}
                  element={element}
                  handleClick={handleClick}
                />
              </>
            ))}
            {/* card section ends  */}

            {/*  */}
          </div>
        </div>
        {/* left card container ends */}

        {/* right card starts  */}
        <div className="cardRight bg-violet-600 w-[21%] ">
          <DataCard />
        </div>
        {/* right card ends */}
      </div>
    </>
  );
}

export default App;

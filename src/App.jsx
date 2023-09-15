import { useEffect, useState } from "react";

import "./App.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ItemCard from "./Components/ItemCard";
import DataCard from "./Components/DataCard";

function App() {
  const [datas, setDatas] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState([20]);

  const handleClick = (element) => {
    // console.log(element);

    const isHave = selectedData.find((ele) => ele.card_id === element.card_id);

    // check to have duplicate value
    if (isHave) {
      // return alert("Items already selesced ");
      return toast.warn("Item already selected !!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    let credits = 0;
    let remaining = 20;

    // calculate selected credits
    selectedData.forEach((ele) => {
      credits += ele.credit;
    });
    credits += element.credit;

    remaining -= credits;

    // check remaing credits
    if (remaining < 0) {
      return toast.warn(
        "Credit limit exceed.You can't take more than 20 credit hours !",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }

    setRemainingCredit(remaining);

    setTotalCredit(credits);

    const newData = [...selectedData, element];

    setSelectedData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("blog.json");
      const responseData = await response.json();

      setDatas(responseData);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="  text-3xl py-7  font-semibold text-center ">
        Course Registration
      </h1>

      <div className="bodyContainer  w-full md:w-[97%] lg:w-[95%] m-auto flex flex-col md:flex-row  justify-between mb-8">
        {/* left card container starts  */}
        <div className="cardLeft w-[76%] sm:w-[90%] md:w-[74%] lg:w-[79%] m-auto pb-8 md:pb-0  ">
          <div className="cardContainer  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 ">
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
        <div className="cardRight w-[80%] sm:w-[70%] md:w-[25%] lg:w-[20%] m-auto md:m-0 ">
          <DataCard
            selectedData={selectedData}
            totalCredit={totalCredit}
            remainingCredit={remainingCredit}
          />
        </div>
        {/* right card ends */}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

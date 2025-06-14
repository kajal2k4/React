import Us2 from "./Us2";
import Us3 from "./Us3";
import Us4 from "./Us4";
import Us5 from "./Us5";
import Us6 from "./Us6";
import Us7 from "./Us7";
import Us8 from "./Us8";
import Us9 from "./Us9";
import FoodReview from "./foodReview";
import Ur1 from "./Ur1";
import Ue1 from "./Ue1";
import Task from "./task";

export default function Main1() {
  return (
    <>
      {/* <Us2 /> */}
      {/* <Us3 /> */}
      {/* <Us4 /> */}
      {/* <Us5/> */}
      {/* <Us6/> */}
      {/* <Us7 /> */}
      {/* <Us8 /> */}
      {/* <Us9/> */}
      {/* <FoodReview/> */}
      {/* <Ur1/> */}
      {/* <Task/> */}
      const TC=createContext() const [datamode,setDatamode]=useState(false)
      function Toggle(){setDatamode((prev) => !prev)}
      const value={(datamode, Toggle)}
      return (
      <TC.Provider value={value}>
        <Us2 />
        <Us3 />
        <Us4 />
      </TC.Provider>
      {/* <Ue1/> */}
    </>
  );
}

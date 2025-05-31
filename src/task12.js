import i1 from './b.jpeg'
import i2 from './c.jpeg'
import Arr from "./App";
export default function task11() {
  const arr = [{id:1, img:i1},{id:2,img:i2}];
  return (
    <>
      <Arr data={arr}/>
    </>
  );
}

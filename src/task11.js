import i1 from './b.jpeg'
import i2 from './c.jpeg'
export default function task10() {
  const arr = [{id:1, img:i1},{id:2,img:i2}];
  return (
    <>
      {arr.map((value) => {
        return<img src={value.img} width="610px" height="400px"/>
})}
    </>
  );
}

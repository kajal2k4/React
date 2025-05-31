export default function task13() {
  const arr = [1, 2, 3, 3, 4, 3, 4, 7, 9, 2];

  var t = arr.map((value) => {
    if (value < 3) {
      return <h2>{value}</h2>;
    }
  });
  console.log(t);
  var t1 = arr.filter((value,i) => {
    if (value < 3) {
      return <h2 key={i}>{value}</h2>;
    }
  });
  console.log(t1);
  return (
    <>
      <div>{t}</div>
      <div>{t1}</div>
    </>
  );
}

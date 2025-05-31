export default function task10() {
  const arr = [1, 2, 3, 3, 4];
  return (
    <>
      {arr.map((value) => {
        return (
          <h1>
            {value}*5 = {value * 5}
          </h1>
        );
      })}
    </>
  );
}

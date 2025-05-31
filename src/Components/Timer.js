export default function timer() {
  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    return (
      <>
        <h2>Your System Time is</h2>
        <h2>{date}</h2>
      </>
    );
  }, 1000);
  return <></>;
}

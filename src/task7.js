export default function task7(props) {
  function handleClick() {
    alert("You clicked");
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("You have submitted");
  }
  function handleChange(e) {
    console.log(e.target.value);
  }
  const score = (a) => {
    alert(`super${a}`);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" />
      <input type="text" onChange={handleChange} />
      </form>
      <button onClick={() => score("sixer")}>BigHit</button>
    </>
  );
}

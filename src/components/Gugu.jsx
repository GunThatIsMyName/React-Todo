const Gugu = ({ value, onSubmit, onChange, result, first, second }) => {
  return (
    <>
      <h1>
        {first} 곱하기 {second} 는 ?
      </h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <input type="submit" value="Holy" />
      </form>
      <div>{result}</div>
    </>
  );
};

export default Gugu;

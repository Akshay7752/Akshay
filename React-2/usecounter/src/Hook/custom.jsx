import useCounter from "./counter";

const HookCustoms = () => {
  // const [count, setCount] = useState(0);

  const [count  , Increment , Decrement , Reset] = useCounter();

  // const Increment = () => {
  //   setCount(count + 1);
  // };

  
  // const Decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <div>
        <span className="button">{count}</span>
        <button className="button" onClick={Increment}>
          Increment
        </button>
        <button className="button" onClick={Decrement}>
          Decrement
        </button>
        <button className="button" onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default HookCustoms;
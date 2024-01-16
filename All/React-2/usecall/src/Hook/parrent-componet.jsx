import { useState, useCallback } from "react";
import Button from "../Hook/button";
import Title from "../Hook/title";
import Count from "../Hook/count";

const ParentComponent = () => {
  
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(10000);
  const [item, setitem] = useState(0);
  

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 2000);
  }, [salary]);
  const incrementitem = useCallback(() => {
    setitem(item + 1);
  }, [item]); 
  const decrimentitem = useCallback(() => {
    setitem(item - 1);
  }, [item]);
  function Reset(){
    setitem(0)
  }
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Incerement Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <Count text="item" count={item} />
      <Button handleClick={incrementitem}>Increment item</Button>
      <Button handleClick={decrimentitem}>decriment item</Button>
      <button className="button" onClick={Reset}>Reset</button>
    </div>
  );
};

export default ParentComponent;

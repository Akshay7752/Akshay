
import cake from "../../../assets/cake.jpg"
import { connect } from 'react-redux'
import { BuyCake } from "./cake_action";
import { BuyChocolate } from "./cake_action";

const Cakecontainer = (props) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <img src={cake} className="relative opacity-50 w-full h-screen object-cover"  alt="" />
        <div className="text-center absolute  ">
          <h1 className="text-3xl font-bold">Number of cake : <span className="text-cyan-700 text-4xl">{props.numOfCakes}</span></h1>
          <button onClick={props.BuyCake } className="rounded-md h-10 w-28 text-white hover:bg-orange-500 mt-5  bg-violet-700 hover:duration-700">
            Buy cake
          </button>
          <h1 className="text-3xl mt-10 font-bold">Number of chocolate : <span className="text-cyan-700 text-4xl"> {props.numOfChocolate}</span></h1>
          <button onClick={props.BuyChocolate} className="rounded-md h-10 w-28 text-white hover:bg-orange-500 mt-5  bg-violet-700 hover:duration-700">
            Buy chocolate
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToprops = (state) => {
  return{
    numOfCakes : state.numOfCakes,
    numOfChocolate : state.numOfChocolate,
    
  }
}

const mapDispatchToprops = (dispatch ) => {
  return{
    BuyCake : () => dispatch(BuyCake()),
    BuyChocolate : () => dispatch(BuyChocolate())
  }
}

export default connect(mapStateToprops,mapDispatchToprops) (Cakecontainer);

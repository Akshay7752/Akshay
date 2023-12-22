import { BUY_CAKE , BUY_CHOCOLATE } from "./Cake_type";


const initialState = {

  numOfCakes: 10,
  numOfChocolate: 0,
  
};

export const cake = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes:state.numOfCakes > 0 ? state.numOfCakes - 1 : 0
        
      };
      case BUY_CHOCOLATE:
        return {
          ...state,
          numOfChocolate: state.numOfChocolate + 1,
        };
  

    default:
      return state; 
  }
};


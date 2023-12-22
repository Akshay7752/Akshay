const { applyMiddleware } = require("redux")
const redux = require("redux")
const reduxlogger = require("redux-logger")

const createStore = redux.createStore
const logger = reduxlogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_CHOCOLATE = 'BUY_CHOCOLATE'

function buyCake(){
     return{
          type:BUY_CAKE,
          info:'First redux action'
     }
}
function buyChocolate(){
    return{
         type:BUY_CHOCOLATE,
         info:'First redux action'
    }
}


const initialState = {
     numOfCakes:10,
     numOfChocolate:50,
     numOfCake:10,
     numOfChocolat:20
    
}

const reducer = (state = initialState , action) => {
     switch(action.type){
          case BUY_CAKE:return{
               ...state,
               numOfCakes:state.numOfCakes - 1
          }
          case BUY_CHOCOLATE:return{
            ...state,
            numOfChocolate:state.numOfChocolate - 1
       }
          default:return state
     }
}
// const Chocolate = (state = initialState , action) => {
//      switch(action.type){
//           case BUY_CAKE:return{
//                ...state,
//                numOfCake:state.numOfCake - 1
//           }
//           case BUY_CHOCOLATE:return{
//             ...state,
//             numOfChocolat:state.numOfChocolat - 1
//        }
//           default:return state
//      }
// }

const store = createStore(reducer , applyMiddleware(logger) )
// const store1 = createStore(Chocolate ,applyMiddleware(logger))
console.log('Initial State' , store.getState());
// console.log('Initial State' , store1.getState());
const unsubscribe = store.subscribe(() => {})
// const unsubscrib = store1.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
// store1.dispatch(buyCake())
store.dispatch(buyChocolate())
// store1.dispatch(buyChocolate())
// store1.dispatch(buyChocolate())
unsubscribe()
// unsubscrib()
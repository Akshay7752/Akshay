
import Cakecontainer from './componet/redux/cake/Cakecontainer'
import { Provider } from 'react-redux'
import store from './componet/redux/store'

function App() {
 
  
  return (
    <>
     <div >
      <Provider store={store}>
      <Cakecontainer/>
      </Provider>
     </div>
    </>
  )
}
export default App

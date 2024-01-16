import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Render from './render'
import RenderItem1 from './render2'
import RenderItem2 from './render3'
import ClickOn7 from './props'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RenderItem1/> */}
    {/* <RenderItem2/> */}
   <ClickOn7/>
  </React.StrictMode>,
)

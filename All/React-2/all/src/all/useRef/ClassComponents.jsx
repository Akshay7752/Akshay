
import { useEffect , useState , useRef } from "react"

const ClassComponents = () => {

     const [name , setName] = useState('')
     const renderCount = useRef(0)

     useEffect(() => {
          renderCount.current = renderCount.current + 1
     })


  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div className="button">My Name Is {name}</div>
      <div className="button">I renderd {renderCount.current}</div>
    </div>
  )
}

export default ClassComponents
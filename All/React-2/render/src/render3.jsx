import PropTypes  from "react"


const ItemStatus = ({Item , ItemPacked}) => {
     if(ItemPacked){
          return null;
     }
     return <li>{Item}</li>
}





const RenderItem2 = () => {
  return (
    <div>
    <ul>
      <ItemStatus Item ="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)" ItemPacked={false}/>
      <ItemStatus Item ="OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)" ItemPacked={false}/>
      <ItemStatus Item ="Realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display" ItemPacked={false}/>
      <ItemStatus Item ="Apple iPhone 14 (128 GB) - Blue" ItemPacked={true}/>
    </ul>
    </div>
  )
}


export default RenderItem2
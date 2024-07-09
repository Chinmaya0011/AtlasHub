import { useContext,createContext,useState } from 'react'
import ItemContext from './ItemContext'
function ItemProvider({childern}) {
const[items,setItems]=useState(["item1","item2","item2"])
const addItem=(newItem)=>{
  
    setItems(...items,newItem)
}
const deleteItem=(index)=>{
    const newItems=[...items];
    newItems.splice(index,1);
    setItems(newItems)
}

const editItems=(index,editedItem)=>{
    const newItems=[...items];
newItems[index]=editedItem;
setItems(newItems)
}


  return (
    <ItemContext>
        {childern}
    </ItemContext>
  )
}

export default ItemProvider
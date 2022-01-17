import React, {useState} from "react";

function Item({ name, category }) {
  const [itemAddedToCart, setIteamAddedToCart] = useState(false)
  const [liClassName, setLi]= useState("")
  const [buttonText, setButtonText] = useState("Add to Cart")
  function addToCart(){
    
    if(itemAddedToCart === false){
      return setButtonText("Remove From Cart"), setLi("in-cart"), setIteamAddedToCart(!itemAddedToCart)
     
    }
    if(itemAddedToCart === true){
      return setButtonText("Add to Cart"), setLi(""), setIteamAddedToCart(!itemAddedToCart)
      
    }
    

  }
  return (
    
    <li className= {liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= {addToCart} >{buttonText}</button>
    </li>
  );
}

export default Item;

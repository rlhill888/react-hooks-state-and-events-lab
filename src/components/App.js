import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appState, setAppState] =  useState( "App light") 
  const [stateButtonText, setStateButtonText] = useState("Dark Mode")
  


  // const appClass = false ? "App dark" : "App light"
  function changeAppState(){
    if(appState=== "App light"){
      return setAppState("App dark"), setStateButtonText("Light Mode")
    }
    if(appState=== "App dark"){
      return setAppState("App light"), setStateButtonText("Dark Mode")
    }
  }
  return (
    <div className={appState}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={changeAppState}>{stateButtonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

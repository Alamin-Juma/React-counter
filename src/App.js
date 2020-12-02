import React, {useState} from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";


function App() {
    const [count, setCount] = useState(0);

    const increaseOrDecreaseCount = (increment, decrement) => {
        if (increment || decrement) {
            setCount(count + increment);
            if (count > 3000){
                window.alert("wow!!!! you getting fucking rich dude")
            }
        }
        //reset value to zero
        else {
            setCount(0)
        }
    };

    return [
        <div className="App ">
            <div>
                <Header />
            </div>,
            <div>
                <Button increment={10} decrement={-10} onClickFunction={increaseOrDecreaseCount}/>
                <Button increment={100} decrement={-100} onClickFunction={increaseOrDecreaseCount}/>
                <Button increment={1000} decrement={-1000} onClickFunction={increaseOrDecreaseCount}/>
                <span>${count}</span>
            </div>

        </div>

    ];
}

export default App;

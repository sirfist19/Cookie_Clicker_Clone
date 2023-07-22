import {useState} from 'react';
import Store from './Store';

const Counter = () => {
    const [playerMoney, setMoney] = useState(0); // the stored counter value
  
    function increment(inc) {
        const new_val = playerMoney + inc;
        setMoney(new_val);
        //console.log(`incrementing by ${inc} from value ${playerMoney} so the new val is ${new_val}`);
    }
    
    const _1_button = {id:1, increment: 1}; // these are JS objects
    const _5_button = {id:2, increment: 5};
    const _10_button = {id:3, increment: 10}; 
    const _100_button = {id:4, increment: 100};
    const [cur_button_arr, setButtonArr] = useState([_1_button]);

    const cost_map = {
        50: _5_button,
        200: _10_button,
        1000: _100_button
    };

    function add_button(cost) {
        const buttonToAdd = cost_map[cost];
        console.log(cur_button_arr);
        if (!hasButtonOfIncrement(buttonToAdd.increment)) {
            let success = buyButton(cost);
            if (success) {
                setButtonArr([...cur_button_arr, buttonToAdd]);
            }
        }
    };
    
    function hasButtonOfIncrement(increment) {
        for (let i = 0; i < cur_button_arr.length; i++) {
            //console.log(cur_button_arr[i].increment);
            if (cur_button_arr[i].increment === increment) {
                return true;
            }
        }
        return false;
    }

    function buyButton(cost) {
        if (cost <= playerMoney) {
            setMoney(playerMoney - cost);
            return true;
        }
        console.log("Not enough money");
        return false;
    };

    return (  
        <div className="top">
            <h1 className="title">Welcome to Counter!</h1>
            <h1 className="counter">{playerMoney}</h1>
            <div className="buttons">
                {cur_button_arr.map(
                    (_button) => (
                        <button 
                            className="counter-button"
                            onClick={() => increment(_button.increment)}
                            key={_button.id} >
                            +{_button.increment}
                        </button>
                    )
                )}
            </div>
            <Store playerMoney={playerMoney} setMoney={setMoney} addButtonFxn={add_button}/> 
        </div>
    );
}

export default Counter;
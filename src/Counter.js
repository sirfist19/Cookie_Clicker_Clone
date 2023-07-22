import {useState} from 'react';
import Store from './Store';

const Counter = () => {
    const [count, setCount] = useState(0); // the stored counter value
  
    function increment(inc) {
        const new_val = count + inc;
        setCount(new_val);
        console.log(`incrementing by ${inc} from value ${count} so the new val is ${new_val}`);
    }
    function clear() {
        setCount(0);
    }
    //const _1_button = <button className="counter-button" onClick={() => increment(1)} key={1}>+1</button>;
    //const _5_button = <button className="counter-button" onClick={() => increment(5)} key={2}>+5</button>;
   // const _10_button = <button className="counter-button" onClick={() => increment(10)} key={3}>+10</button>;
    //const _100_button = <button className="counter-button" onClick={() => increment(100)} key={4}>+100</button>;
    // <button className="counter-button-clear" onClick={() => clear()}>Clear</button>
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
        if (!cur_button_arr.includes(buttonToAdd)) {
            setButtonArr([...cur_button_arr, buttonToAdd]);
        }
    }

    return (  
        <div>
            <h1 className="title">Welcome to Counter!</h1>
            <h1 className="counter">{count}</h1>
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
            <Store playerMoney={count} setMoney={setCount} addButtonFxn={add_button}/> 
        </div>
    );
}

export default Counter;
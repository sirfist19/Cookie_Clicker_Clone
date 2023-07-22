import { useState } from "react";

const Words = () => {
    const [words, setArray] = useState(["hi"]); // sets the words array to [] initially
    const [fieldVal, setFieldVal] = useState("");
    
    const addWord = (word) => {
        // Use the spread operator (...) to create a new array with the new item added
        setArray([...words, word]);
    };//onClick={() => addWord(word)}

    return ( 
        <div>
            <h1 className="title">Welcome to Words!</h1>
            <form className="words-form">
                <input type="text" name="input-box" placeholder="Enter a word"/>
                <button className="input-button" ></button>
            </form> 
            <ul>
                {words.map(
                    (item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </div>
    );
}
 
export default Words;
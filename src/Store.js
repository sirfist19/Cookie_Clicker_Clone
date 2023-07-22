const Store = ({playerMoney, setMoney, addButtonFxn}) => {
    function buyButton(cost, playerMoney) {
        if (cost <= playerMoney) {
            playerMoney -= cost;
            setMoney(playerMoney);
            addButtonFxn(cost);
        }
        else {
            console.log("Not enough money");
        }
    };

    return ( 
        <div className="store"> 
            <h1>Store</h1>
            <div className="store-view">
                <div className="store-row">
                    <p>Buy +5 button</p>
                    <button className="store-button" 
                        onClick={()=>{buyButton(50, playerMoney, setMoney);}}>
                            Spend 50
                    </button>
                </div>
                <div className="store-row">
                    <p>Buy +10 button</p>
                    <button className="store-button" 
                        onClick={()=>{buyButton(200, playerMoney, setMoney);}}>
                            Spend 200
                    </button>
                </div>
                <div className="store-row">
                    <p>Buy +100 button</p>
                    <button className="store-button" 
                        onClick={()=>{buyButton(1000, playerMoney, setMoney);}}>
                            Spend 1000
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Store;
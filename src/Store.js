const Store = ({addButtonFxn}) => {
    return ( 
        <div className="store"> 
            <h1>Store</h1>
            <div className="store-view">
                <div className="store-row">
                    <p>Buy +5 button</p>
                    <button className="store-button" 
                        onClick={()=>{addButtonFxn(50)}}>
                            Spend 50
                    </button>
                </div>
                <div className="store-row">
                    <p>Buy +10 button</p>
                    <button className="store-button" 
                        onClick={()=>{addButtonFxn(200)}}>
                            Spend 200
                    </button>
                </div>
                <div className="store-row">
                    <p>Buy +100 button</p>
                    <button className="store-button" 
                        onClick={()=>{addButtonFxn(1000)}}>
                            Spend 1000
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Store;
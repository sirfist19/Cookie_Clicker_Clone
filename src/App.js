
import Counter from './Counter';
import Store from './Store';

function App() {
  return (
    <div className="app">
      <Counter/>
    </div>
  );

  // <Words/>
  // note if the onClick function is set to just increment(count) then it will be run when rendering the button element
  //  to make it run only on clicks, need to either call the function without an argument (which sets it as a callback),
  //  or place it in an arrow function
}

export default App;

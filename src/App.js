import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsAccumulator } from "./actionAcumulator";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionsAccumulator,
    dispatch
  );

  const account = useSelector(state => state.reducer);

  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const submitHandler = e => {
    e.preventDefault();
    setAmount(value);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>Amount:</label>
        <input
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input type="submit" value="Submit amount" />
      </form>
      <button
        onClick={() => {
          depositMoney(parseInt(amount));
          setValue(0);
          setAmount(0);
        }}
      >
        Deposit
      </button>
      <h3>{account}</h3>
      <button
        onClick={() => {
          withDrawMoney(parseInt(amount));
          setValue(0);
          setAmount(0);
        }}
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;

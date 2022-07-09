export const Quantity = ({ amount, decrementItem, incrementItem }) => {
  return (
    <div>
      <p>Amount</p>
      <button onClick={decrementItem}>-</button>
      <p>{amount}</p>
      <button onClick={incrementItem}>+</button>
      {console.log(amount)}
    </div>
  );
};

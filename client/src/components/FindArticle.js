export const FindArticle = ({ findSupplier }) => {
  return (
    <div>
      <form onSubmit={findSupplier}>
        <label htmlFor="product">Product:</label>
        <input id="product" name="product" />
        <label htmlFor="amount">Amount:</label>
        <input id="amount" type="number" name="amount" />
        <label htmlFor="shipmentTime">shipment Time:</label>
        <input id="shipmentTime" type="number" name="shiptime" />
        <label htmlFor="shipmentDate" />
        <input id="shipmentDate" type="date" name="shipdate" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export const FindArticle = ({ findSupplier }) => {
  return (
    <div>
      <form onSubmit={findSupplier}>
        <label className="p-2 text-white" htmlFor="product">
          Product:
        </label>
        <input className="p-2" id="product" name="product" />
        <label className="p-2 text-white" htmlFor="amount">
          Amount:
        </label>
        <input className="p-2" id="amount" type="number" name="amount" />
        <label className="p-2 text-white" htmlFor="shipmentTime">
          shipment Time:
        </label>
        <input
          className="p-2"
          id="shipmentTime"
          type="number"
          name="shiptime"
        />
        <button
          className="p-2 m-2 bg-slate-400 hover:bg-slate-200 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

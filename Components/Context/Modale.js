export default function Modale({
  addtoCart,
  product,
  index,
  handleRangeChnage,
  quantity,
}) {
  return (
    <>
      <div className="d-grid gap-2">
        <button
          style={{ marginInline: "10px" }}
          type="button"
          className="addbtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add to Cart
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Select Quantity
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="card text-center">
              <div className="modal-body">
                <p>{quantity === "" ? 0 : quantity}</p>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max={product.available_quantity}
                  id="customRange2"
                  onChange={(e) => handleRangeChnage(e.target.value, index)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addtoCart}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

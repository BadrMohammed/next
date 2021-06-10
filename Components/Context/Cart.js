import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Link from "next/link";
import { calculatePrice } from "../ReusableFunctions";
const Cart = (props) => {
  const {
    className,
    productCart,
    deleteProduct,
    editCart,
    quantity,
    handleRangeChnage,
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [productItem, setProduct] = useState(null);
  const [product_index, setIndex] = useState(null);

  const toggle = () => setModal(!modal);
  const toggleNested = (e, product, index) => {
    e.preventDefault();
    setNestedModal(!nestedModal);
    if (product !== undefined) {
      handleRangeChnage(product.quantity);
      setProduct(product);
      setIndex(index);
    }
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const onEdit = (e) => {
    editCart(e, product_index);
    toggleNested(e);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Cart
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {productCart.length > 0 ? (
            <>
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Total Price</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {productCart.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>
                          {" EGY " +
                            calculatePrice(product.quantity, product.price)}
                        </td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => deleteProduct(e, index)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <Button
                            color="success"
                            onClick={(e) => toggleNested(e, product, index)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <Link href="/order" data-bs-dismiss="modal">
                <a style={{ color: "black" }}>Place Order</a>
              </Link>
            </>
          ) : (
            <p style={{ color: "black", textAlign: "center" }}>
              No ITems Exist
            </p>
          )}

          {/* <div className="row">
                <div className="col">
                  <p>{"total price: " + calculateTotalPrice()}</p>
                </div> */}
          {/* </div> */}
          <br />

          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader> Update Quantity</ModalHeader>
            <ModalBody>
              <div className="card text-center">
                <p>{quantity === "" ? 0 : quantity}</p>
              </div>
              <div className="modal-body">
                {productItem !== null ? (
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max={productItem.available_quantity}
                    id="customRange2"
                    onChange={(e) => handleRangeChnage(e.target.value)}
                  />
                ) : null}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={onEdit}>
                Save
              </Button>
              <Button color="secondary" onClick={toggleAll}>
                Close All
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Cart;

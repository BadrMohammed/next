import React, { Component, createContext } from "react";
export const ProductContext = createContext();

class ProductContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "HD Yellow Wallpapers",
          picture: "headphone1.jpg",
          category: "headphones",
          price: 120,
          available_quantity: "20",
        },

        {
          id: 2,
          name: "sunglasses",
          picture: "sunglass1.jpg",
          category: "accessory",
          price: 200,
          available_quantity: "50",
        },
        {
          id: 3,
          name: "camera",
          picture: "camera1.jpg",
          category: "film photography",
          price: 2000,
          available_quantity: "10",
        },
        {
          id: 4,
          name: "wristwatch",
          picture: "wristwatch.jpg",
          category: "minimalistic",
          price: 500,
          available_quantity: "18",
        },
      ],

      quantity: "",

      productCart: [],
    };
  }

  handleRangeChnage = (value) => {
    this.setState({ quantity: value });
  };

  deleteProduct = (e, index) => {
    e.preventDefault();
    let items = [...this.state.productCart];
    items.splice(index, 1);
    this.setState({ productCart: items });
  };

  editCart = (e, index) => {
    e.preventDefault();
    let items = [...this.state.productCart];
    let product = { ...items[index] };
    product.quantity = this.state.quantity;
    items[index] = product;

    this.setState({ quantity: "", productCart: items });
  };

  addtoCart = (e, product) => {
    e.preventDefault();
    product.quantity = this.state.quantity;
    this.setState({
      quantity: "",
      productCart: [...this.state.productCart, product],
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addtoCart: this.addtoCart,
          handleRangeChnage: this.handleRangeChnage,
          deleteProduct: this.deleteProduct,
          editCart: this.editCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductContextProvider;

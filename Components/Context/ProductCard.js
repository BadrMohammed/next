import Modale from "./Modale";
// import Image from "next/image";
import { Row, Col, Container, Card } from "reactstrap";
export default function ProductCard({
  products,
  addtoCart,
  productCart,
  handleRangeChnage,
  quantity,
}) {
  const checkInCart = (product) => {
    if (productCart.length > 0) {
      if (productCart.find((p) => p.id === product.id)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const onSave = (e, product) => {
    let added = false;
    if (productCart.length === 0) {
      added = true;
    } else {
      if (checkInCart(product) === true) {
        alert("the item is already in cart");
      } else {
        added = true;
      }
    }
    if (added === true) {
      if (quantity === "") {
        alert("quantity is required");
      } else {
        addtoCart(e, product);
      }
    }
  };
  const renderCard = () => {
    if (products.length > 0) {
      return products.map((product, index) => {
        return (
          <Col key={index} xl={3} lg={3} md={6} sm={6} xs={12}>
            <Card className="pricingTable">
              <div style={{ height: "100%" }}>
                <Row>
                  <Col>
                    <img
                      src={"/img/" + product.picture}
                      alt={product.name}
                      style={{ height: "15em", width: "100%" }}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="col-lg-7 ml-3">
                    <p>{product.name}</p>

                    <div className="col mr-3">{product.category}</div>
                  </Col>
                  <Col>
                    <p>{"EGY " + product.price}</p>
                  </Col>
                </Row>
              </div>
              <Row className="mt-3 mb-3">
                <Col>
                  {checkInCart(product) === true ? (
                    "In Cart"
                  ) : (
                    <Modale
                      addtoCart={(e) => onSave(e, product)}
                      product={product}
                      index={index}
                      handleRangeChnage={handleRangeChnage}
                      quantity={quantity}
                    />
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        );
      });
    }
  };
  return (
    <Container className="mt-4">
      <Row>{renderCard()}</Row>
    </Container>
  );
}

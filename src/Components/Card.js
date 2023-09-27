import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

// import img1 from "../imgs/1.png";
// import img2 from "../imgs/2.png";
// import img3 from "../imgs/3.png";

function Cards({ itemsData }) {
  return (
    <Row>
      <Fade>
        {itemsData.length >= 1 ? (
          itemsData.map((items, index) => {
            return (
              <>
                <Col key={index} sm="12" className="mb-3">
                  <Card
                    className="d-flex flex-row"
                    style={{ backgroundColor: "#F8F8F8" }}
                  >
                    <Card.Img
                      className="img-item"
                      style={{
                        width: "260px",
                        height: "180px",
                        borderRadius: "5px",
                      }}
                      variant="top"
                      src={items.imgUrl}
                      alt={items.title}
                    />
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">{items.title}</div>
                        <div className="item-price"> {items.price} </div>
                      </Card.Title>
                      <Card.Text className="py-2">
                        <div className="item-description">
                          {items.describiton}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد اصناف</h3>
        )}
      </Fade>
    </Row>
  );
}

export default Cards;

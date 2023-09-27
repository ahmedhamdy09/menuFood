import React from "react";
import { Col, Row } from "react-bootstrap";

function Catogry({ filterByCatogory, allCategory }) {
  //to filter by catogry
  const onFilter = (cate) => {
    filterByCatogory(cate);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <>
                <div>
                  <button
                    onClick={() => onFilter(cat)}
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    {cat}
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات الان</h4>
        )}
      </Col>
    </Row>
  );
}

export default Catogry;

import React, { useState } from "react";
import Header from "../Header/header";

function CreateProduct() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleAddImages = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages([...images, ...selectedImages]);
  };

  const handleAddProduct = () => {
    // Perform your logic here to add the product
    console.log("Adding product:", {
      sku,
      name,
      quantity,
      description,
      images,
    });
  };
  const isEditing = true;
  return (
    <div>
      <Header />
      <div
        className="wrapper"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "35px",
              fontWeight: 900,
            }}
          >
            <div
              style={{
                fontSize: "36px",
                lineHeight: "48.6px",
                letterSpacing: "15%",
                color: "#62427",
              }}
            >
              PRODUCTS <img src="/assets/arrow.svg" alt="SVG arrow Image" />
            </div>
            <div
              style={{
                fontSize: "24px",
                lineHeight: "32.4px",
                letterSpacing: "8%",
                marginLeft: "10px",
                color: "#001EB9",
                fontWeight: 700,
              }}
            >
              Add New Product
            </div>
          </div>

          <div
            className="mb-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <label
              htmlFor="sku"
              className="form-label"
              style={{
                marginRight: "10px",
                fontWeight: 500,
                fontSize: "19px",
                lineHeight: "25.65px",
              }}
            >
              SKU
            </label>
            <input
              type="text"
              className="form-control"
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              style={{
                width: 400,
                height: "45px",
                top: "336px",
                left: "262px",
                backgroundColor: "#F7F7F7",
                border: "none",
              }}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{
                      fontWeight: 500,
                      fontSize: "19px",
                      lineHeight: "25.65px",
                      marginRight: "10px",
                      alignSelf: "flex-start", // Align label to the left side
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: 400,
                      height: "45px",
                      top: "336px",
                      left: "262px",
                      backgroundColor: "#F7F7F7",
                      border: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <label
                  htmlFor="quantity"
                  className="form-label"
                  style={{ marginRight: "10px" }}
                >
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{
                    width: 400,
                    height: "45px",
                    top: "336px",
                    left: "262px",
                    backgroundColor: "#F7F7F7",
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <br></br>
            <h8 htmlFor="description" className="form-label">
              A Small description about the project
            </h8>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "1078px",
                height: "105px",
                top: "509px",
                left: "181px",
                backgroundColor: "#F7F7F7",
                border: "none",
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="images" className="form-label">
              Product Images
            </label>
            <input
              type="file"
              className="form-control"
              id="images"
              multiple
              onChange={handleAddImages}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-primary" onClick={handleAddProduct}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;

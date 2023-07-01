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

  return (
    <div>
      <Header />
      <div className="container">
        <h3>Create Product</h3>
        <div className="mb-3">
          <label htmlFor="sku" className="form-label">
            SKU
          </label>
          <input
            type="text"
            className="form-control"
            id="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default CreateProduct;

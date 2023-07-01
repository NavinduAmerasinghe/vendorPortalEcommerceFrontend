import "./Products.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/index";
import Header from "../Header/header";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <div className="h3">PRODUCTS</div>
          </div>
        </div>
        <div class="row">
          <div className="container">
            <div className="search_wrap search_wrap_6">
              <div className="search_box">
                <input
                  type="text"
                  className="input"
                  placeholder="Search for products..."
                />
                <div className="btn">
                  <p>
                    <ion-icon name="search-outline"></ion-icon>Search
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
          <button type="button" class="btn btn-primary">
            <img src="/assets/star.svg" alt="SVG star Image" />
          </button>
        </div>
        <div id="table" className="bg-white rounded">
          <div className="table-responsive">
            <table className="table activitites">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase header">
                    SKU
                  </th>
                  <th scope="col" className="text-uppercase">
                    IMAGE
                  </th>
                  <th scope="col" className="text-uppercase">
                    PRODUCT NAME
                  </th>
                  <th scope="col" className="text-uppercase">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="h6">Shoes</div>
                      <div className="text-muted">Nike shoes</div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$100</td>
                  <td>$200</td>
                  <td>
                    <img src="/assets/delete-icon.svg" alt="SVG delete Image" />

                    <img src="/assets/edit-icon.svg" alt="SVG edit Image" />

                    <img src="/assets/starred.svg" alt="SVG star Image" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

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

        {/* <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <div className="h3">My lists</div>
            <div className="text-uppercase">6 sublists</div>
          </div>
          <div className="ml-auto btn">
            <span className="fas fa-cog"></span>
          </div>
          <div className="btn" id="sub">
            + Add sublist
          </div>
        </div> */}
        {/* <div
          className="notification alert alert-dismissible fade show text-white d-flex align-items-center my-3 text-justify"
          role="alert"
        >
          <span className="far fa-bell pr-2"></span>
          You've got 3 new items on your list and 7 new comments check it out!
          <button
            type="button"
            className="close text-white ml-auto"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">Ok, Thanks</span>
          </button>
        </div> */}
        <div id="table" className="bg-white rounded">
          <hr />
          <div className="table-responsive">
            <table className="table activitites">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase header">
                    item
                  </th>
                  <th scope="col" className="text-uppercase">
                    Quantity
                  </th>
                  <th scope="col" className="text-uppercase">
                    price each
                  </th>
                  <th scope="col" className="text-uppercase">
                    total price
                  </th>
                  <th scope="col" className="text-uppercase">
                    status
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
                    <div className="badge badge-success p-2">Purchased</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="h6">T-shirt</div>
                      <div className="text-muted">White T-shirt</div>
                    </div>
                  </td>
                  <td>3</td>
                  <td>$25</td>
                  <td>$75</td>
                  <td>
                    <div className="badge badge-warning p-2">Pending</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <div className="text-muted">
              <button
                className="btn"
                type="button"
                data-toggle="collapse"
                data-target="#table"
                aria-expanded="false"
                aria-controls="table"
              >
                Hide <span className="fas fa-minus"></span>
              </button>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end">
              <div className="d-flex px-3 pr-md-5 py-1 subtotal">
                <div className="px-4">Subtotal</div>
                <div className="h5 font-weight-bold px-md-2">$1,340</div>
              </div>
              <div className="text-muted tag">
                + add all the items to cart{" "}
                <span className="fas fa-shopping-cart pl-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

import React, { Component } from "react";
import { ShoppingFilled } from "@ant-design/icons";
import { Space, Badge } from "antd";

export default class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-dark">
          <div className="container-sm">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand mb-0 h1">
              <strong>KICKS ZONE</strong>
            </span>
            <div
              className="collapse navbar-collapse py-2"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
                <span></span>
              </div>
            </div>
            <Space direction="vertical">
              <Space size="large">
                <a
                  href="#"
                  onClick={() => console.log(this.props.cartProducts)}
                >
                  <Badge
                    count={this.props.totalCount > 0 && this.props.totalCount}
                  >
                    {/* <ShoppingFilled className="fs-4 text-light" /> */}
                    <i className="fa-solid fa-cart-shopping text-light fs-5"></i>
                  </Badge>
                </a>
              </Space>
            </Space>
          </div>
        </nav>
      </div>
    );
  }
}

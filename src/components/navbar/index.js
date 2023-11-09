"use client";

import { useState, useEffect } from "react";
import NavPanier from "../navPanier";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../../styles/navbar.css";
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [shop, setShop] = useState(false);

  const handleCloseShop = () => setShop(false);
  const handleShowShop = () => setShop(true);

  const handleCloseMenu = () => setMenu(false);
  const handleShowMenu = () => setMenu(true);

  return (
    <>
      {/* DESKTOP NAVIGATION */}
       <div className="d-none d-md-block">
        <Nav className="pt-2">
          <NavItem className="logo me-2">
            <Nav.Link href="/">
              <img src="logo.png" alt="logo"></img>
            </Nav.Link>
          </NavItem>
          <NavItem
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <form>
              <input placeholder="Search..." className="search_input" />
              <button>
                <SearchOutlinedIcon />
              </button>
            </form>
          </NavItem>
          <NavItem
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <Nav.Link href="/login" style={{ color: "black", padding: "0" }}>
              <span>LOGIN/REGISTER</span>
            </Nav.Link>
          </NavItem>
          <NavItem
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <div
              style={{ borderLeft: "1px solid black", height: "30px" }}
            ></div>
          </NavItem>
          <NavItem
            className="dropbtn"
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* <Nav.Link href="/cart" style={{ color: "black", padding: "0" }}> */}
              <span className="me-2" style={{color:"black" , padding:"0"}}>PANIER</span>
              <div className="dropdown">
                <ShoppingBagOutlinedIcon className="shop_icon" style={{color:"black"}}/>
                <div className="dropdown-content">
                  <a href="#">
                    <NavPanier
                      image="pull1.jpg"
                      title="New Pull"
                      price="2000"
                    />
                  </a>
                  <a href="#">
                    <NavPanier
                      image="pull1.jpg"
                      title="New Pull"
                      price="2000"
                    />
                  </a>
                  <div
                    style={{
                      textAlign: "center",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <a
                      href="/cart"
                      style={{
                        marginBottom: "10px",
                        padding: "0",
                        width: "auto",
                      }}
                    >
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ width: "-webkit-fill-available" }}
                      >
                        Voir le panier
                      </Button>
                    </a>
                    <a
                      href="/checkout"
                      style={{
                        marginBottom: "10px",
                        padding: "0",
                        width: "auto",
                      }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        style={{ width: "-webkit-fill-available" }}
                      >
                        Commander
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            {/* </Nav.Link> */}
          </NavItem>
        </Nav>
        <hr></hr>
        <Nav className="justify-content-center">
          <NavItem style={{ marginRight: "15px" }}>
            <Nav.Link
              href="/sweatshirthoodie"
              style={{ color: "black", padding: "0" }}
            >
              SWEATSHIRT & HOODIE
            </Nav.Link>
          </NavItem>
          <NavItem
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <div
              style={{ borderLeft: "1px solid black", height: "30px" }}
            ></div>
          </NavItem>
          <NavItem>
            <Nav.Link href="/jeans" style={{ color: "black", padding: "0" }}>
              JEANS
            </Nav.Link>
          </NavItem>
        </Nav>
        <hr></hr>
      </div> 

      {/* MOBILE NAVIGATION */}
      <div className="d-md-none">
        <Nav style={{ paddingTop: "10px" }}>
          <Nav.Item
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <MenuIcon className="shop_icon" onClick={handleShowMenu} />
          </Nav.Item>
          <Offcanvas show={menu} onHide={handleCloseMenu}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Old Boyz</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link href="/" className="mb-3">
                HOME
              </Nav.Link>
              <hr></hr>
              <Nav.Link href="/sweatshirthoodie" className="mb-3">
                SWEATSHIRT & HOODIE
              </Nav.Link>
              <hr></hr>
              <Nav.Link href="/jeans" className="mb-3">
                JEANS
              </Nav.Link>
              <hr></hr>
              <Nav.Link href="/login" className="mb-5">
                LOGIN/REGISTER
              </Nav.Link>
              <Nav.Item>
                <form>
                  <input placeholder="Search..." className="search_input" />
                  <button>
                    <SearchOutlinedIcon />
                  </button>
                </form>
              </Nav.Item>
            </Offcanvas.Body>
          </Offcanvas>
          <Nav.Item className="mx-auto">
            <Nav.Link href="/">
              <img src="logo.png" alt="logo"></img>
            </Nav.Link>
          </Nav.Item>
          <NavItem style={{ display: "flex", alignItems: "center" }}>
            <Nav.Link style={{ color: "black" }}>
              <ShoppingBagOutlinedIcon
                className="shop_icon"
                onClick={handleShowShop}
              ></ShoppingBagOutlinedIcon>
            </Nav.Link>
            <Offcanvas
              show={shop}
              onHide={handleCloseShop}
              placement="end"
              style={{ width: "250px" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Panier</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul style={{ padding: "0" }}>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <NavPanier
                      image="pull1.jpg"
                      title="New Pull"
                      price="2000"
                    />
                  </a>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <NavPanier
                      image="pull1.jpg"
                      title="New Pull"
                      price="2000"
                    />
                  </a>
                </ul>
                <div style={{ textAlign: "center" }}>
                  <a href="/cart">
                    <Button
                      variant="dark"
                      size="lg"
                      style={{ marginBottom: "10px" }}
                    >
                      Voir le panier
                    </Button>
                  </a>
                  <a href="/checkout">
                    <Button variant="primary" size="lg">
                      Commander
                    </Button>
                  </a>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </NavItem>
        </Nav>
      </div>
    </>
  );
}

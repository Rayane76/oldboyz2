"use client";
import { useState } from "react";

export default function ColorDetails(props) {
  const [sSize, setSSize] = useState(0);
  const [mSize, setMSize] = useState(0);
  const [lSize, setLSize] = useState(0);
  const [xlSize, setXlSize] = useState(0);
  const [xxlSize, setXxlSize] = useState(0);
  const [colorImages, setColorImages] = useState([]);
  const onInputChange = (e) => {
    setColorImages((prev) => [...prev, e.target.files[0]]);
    props.color.allimages.push(e.target.files[0]);
  };

  return (
    <>
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>S :</label>
          <button
            onClick={() => {
              props.color.sizeInStock.s--;
              setSSize(sSize - 1);
            }}
          >
            -
          </button>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>{sSize}</span>
          <button
            onClick={() => {
              props.color.sizeInStock.s++;
              setSSize(sSize + 1);
            }}
          >
            +
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>M :</label>
          <button
            onClick={() => {
              props.color.sizeInStock.m--;
              setMSize(mSize - 1);
            }}
          >
            -
          </button>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>{mSize}</span>
          <button
            onClick={() => {
              props.color.sizeInStock.m++;
              setMSize(mSize + 1);
            }}
          >
            +
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>L :</label>
          <button
            onClick={() => {
              setLSize(lSize - 1);
              props.color.sizeInStock.l--;
            }}
          >
            -
          </button>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>{lSize}</span>
          <button
            onClick={() => {
              setLSize(lSize + 1);
              props.color.sizeInStock.l++;
            }}
          >
            +
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>XL :</label>
          <button
            onClick={() => {
              setXlSize(xlSize - 1);
              props.color.sizeInStock.xl--;
            }}
          >
            -
          </button>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>
            {xlSize}
          </span>
          <button
            onClick={() => {
              setXlSize(xlSize + 1);
              props.color.sizeInStock.xl++;
            }}
          >
            +
          </button>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>XXL :</label>
          <button
            onClick={() => {
              props.color.sizeInStock.xxl--;
              setXxlSize(xxlSize - 1);
            }}
          >
            -
          </button>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>
            {xxlSize}
          </span>
          <button
            onClick={() => {
              props.color.sizeInStock.xxl++;
              setXxlSize(xxlSize + 1);
            }}
          >
            +
          </button>
        </li>
      </ul>
      <label>Upload {props.color.colorName} Images</label>
      <br></br>
      <input type="file" onChange={onInputChange} required />
      <div>
        {colorImages.length === 0
          ? ""
          : colorImages.map((image) => {
              return <img src="pull1.jpg" style={{ height: "50px" }}></img>;
            })}
      </div>
    </>
  );
}

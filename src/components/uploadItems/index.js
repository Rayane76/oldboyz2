"use client";

import { useState, useEffect } from "react";
import ColorDetails from "../uploadColorDetails";

export default function UploadsPage() {
  const [nextStep, setNextStep] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [colorName, setColorName] = useState("");
  const [colors, setColors] = useState([]);
  const [colorList, setColorList] = useState([]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };

  const onColorChange = (e) => {
    setColorName(e.target.value);
  };

  const onSubmitColorName = () => {
    {
      colorName === "" ? "" : setColors((prev) => [...prev, colorName]);
      const inputcolor = document.getElementById("colorName");
      inputcolor.value = "";
    }
  };

  const handleSubmitfirstStep = (e) => {
    e.preventDefault();
    {
      title === "" || price === "" ? "" : setNextStep(true);
      colors.map((color) => {
        setColorList((prev) => [
          ...prev,
          {
            colorName: color,
            sizeInStock: {
              s: 0,
              m: 0,
              l: 0,
              xl: 0,
              xxl: 0,
            },
            allimages: [],
          },
        ]);
      });
    }
  };

  useEffect(() => {}, [colors, colorList]);

  return (
    <>
      <div>
        <form>
          <label style={{ marginRight: "10px" }}>Enter article name :</label>
          <input
            type="text"
            name="title"
            placeholder="enter title"
            onChange={onTitleChange}
            required
            style={{ marginRight: "10px" }}
          />
          <label style={{ marginRight: "10px" }}>Enter article price :</label>
          <input
            type="text"
            name="price"
            placeholder="enter price"
            onChange={onPriceChange}
            required
            style={{ marginRight: "10px" }}
          />
          <label style={{ marginRight: "10px" }}>
            Enter article's colors :
          </label>
          <input
            type="text"
            name="color"
            id="colorName"
            placeholder="enter color"
            onChange={onColorChange}
            required
            style={{ marginRight: "10px" }}
          />
          <button onClick={onSubmitColorName}>Submit Color</button>
          <br></br>
          {colors.length === 0
            ? ""
            : colors.map((color) => {
                return (
                  <ul>
                    <li>
                      {color}{" "}
                      <button
                        onClick={() => {
                          const deleted = colors.filter((deletedColor) => {
                            return deletedColor != color;
                          });
                          setColors(deleted);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                );
              })}

          <br></br>
          {colors.length != 0 && (
            <p>
              Done with colors ?{" "}
              <button type="submit" onClick={handleSubmitfirstStep}>
                Submit and go to next step
              </button>
            </p>
          )}
        </form>

        {nextStep === true && (
          <>
            <div style={{ display: "flex" }}>
              {colorList.map((color) => {
                return (
                  <>
                    <div style={{ marginRight: "70px" }}>
                      <label>{color.colorName}</label>
                      <br></br>
                      <label>Enter sizes :</label>
                      <ColorDetails color={color} />
                    </div>
                  </>
                );
              })}
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ marginTop: "30px" }}
            >
              <button onClick={() => console.log(colorList)}>
                Submit Article
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

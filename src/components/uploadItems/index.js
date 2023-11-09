"use client";

import { useState, useEffect } from "react";

export default function UploadsPage() {
  const [nextStep, setNextStep] = useState(false);
  const [colorImages, setColorImages] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [colorName, setColorName] = useState("");
  const [colors, setColors] = useState([]);
  const [colorList, setColorList] = useState([
    // {
    //   colorName: "",
    //   sizeInStock: {
    //     s: 0,
    //     m: 0,
    //     l: 0,
    //     xl: 0,
    //     xxl: 0,
    //   },
    //   allimages: [],
    // },
  ]);
  const [sSize, setSSize] = useState(0);
  const [mSize, setMSize] = useState(0);
  const [lSize, setLSize] = useState(0);
  const [xlSize, setXlSize] = useState(0);
  const [xxlSize, setXxlSize] = useState(0);

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

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setColorImages((prev) => [...prev, e.target.files[0]]);
  };

  useEffect(() => {}, [colors,colorList]);

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
                      <ul>
                        <li style={{ marginBottom: "10px" }}>
                          <label style={{ marginRight: "10px" }}>S :</label>
                          <button onClick={() => {color.sizeInStock.s--;}}>-</button>
                          <span
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                          >
                            {color.sizeInStock.s}
                          </span>
                          <button onClick={() => {color.sizeInStock.s++;}}>+</button>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <label style={{ marginRight: "10px" }}>M :</label>
                          <button onClick={() => {color.sizeInStock.m--;}}>-</button>
                          <span
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                          >
                            {color.sizeInStock.m}
                          </span>
                          <button onClick={() => {color.sizeInStock.m++;}}>+</button>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <label style={{ marginRight: "10px" }}>L :</label>
                          <button onClick={() =>{color.sizeInStock.l--;}}>-</button>
                          <span
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                          >
                            {color.sizeInStock.l}
                          </span>
                          <button onClick={() =>{color.sizeInStock.l++;}}>+</button>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <label style={{ marginRight: "10px" }}>XL :</label>
                          <button onClick={() => {color.sizeInStock.xl--;}}>
                            -
                          </button>
                          <span
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                          >
                           {color.sizeInStock.xl}
                          </span>
                          <button onClick={() =>{color.sizeInStock.xl++;}}>
                            +
                          </button>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                          <label style={{ marginRight: "10px" }}>XXL :</label>
                          <button onClick={() => {color.sizeInStock.xxl--;}}>
                            -
                          </button>
                          <span
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                          >
                           {color.sizeInStock.xxl}
                          </span>
                          <button onClick={() => {color.sizeInStock.xxl++;}}>
                            +
                          </button>
                        </li>
                      </ul>
                      <label>Upload {color.colorName} Images</label>
                      <br></br>
                      <input type="file" onChange={onInputChange} required />
                      <br></br>
                    </div>
                    <div>
                      {colorImages.length === 0
                        ? ""
                        : colorImages.map((image) => {
                            return (
                              <img
                                src="pull1.jpg"
                                style={{ height: "50px" }}
                              ></img>
                            );
                          })}
                    </div>
                  </>
                );
              })}
            </div>
            {/* <div>
            {colorImages.length === 0 ? "" : 
              colorImages.map((image)=> {
                console.log(image);
                return(
                  <img src="pull1.jpg"></img> 
                )
              })
             }
          </div> */}
          </>
        )}
      </div>
    </>
  );
}

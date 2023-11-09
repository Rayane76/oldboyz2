'use client'
import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem(){
    const [quantity,setQuantity] = useState(1);
    return (
      <>
          <tr>
            <td>
              <div style={{display:"flex"}}>
              <IconButton aria-label="delete" style={{marginRight:"10px"}}>
         <DeleteIcon />
        </IconButton>
                  <img src='pull1.jpg' alt='art' style={{width:"75px",marginRight:"10px"}}></img>
                  <h5 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Pull Gray</h5>
              </div>
            </td>
            <td style={{verticalAlign:"middle"}}>2000</td>
            <td style={{verticalAlign:"middle"}}>
            <button onClick={()=>{setQuantity(quantity - 1)}}>-</button>
            <span style={{marginLeft:"5px",marginRight:"5px"}}>{quantity}</span>
            <button onClick={()=>{setQuantity(quantity + 1)}}>+</button>
            </td>
            <td style={{verticalAlign:"middle"}}>2000</td>
          </tr>
      </>
    )
}
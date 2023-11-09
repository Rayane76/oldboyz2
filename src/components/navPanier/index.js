'use client'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NavPanier(props){
    return (
        <>
          <li style={{listStyle:"none"}}>
          <div style={{display:"flex"}}>
            <img src={props.image} style={{width:"75px",marginRight:"10px"}}></img>
            <div>
            <h5>{props.title}</h5>
            <p>{props.price}</p>
            </div>
            <IconButton aria-label="delete">
             <DeleteIcon />
            </IconButton>
          </div>
          </li>
          <hr></hr>
          </>
        )
}
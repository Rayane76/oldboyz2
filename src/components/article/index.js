

export default function Article(props){
    return (
        <>
        <div style={{marginRight:"0px",paddingBottom:"20px",width:"fit-content"}}>
          <img src={props.image} alt="" style={{paddingTop:"10px",paddingBottom:"10px",width:"200px"}}></img>
          <p style={{color:"black",textAlign:"center"}}>{props.title}</p>
          <p style={{color:"black",textAlign:"center"}}>${props.price}</p>
        </div>
        </>
    )

}
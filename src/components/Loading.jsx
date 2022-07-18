import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "20px auto",
  borderCcolor: "red",
}

const Loading = () => {
  return (
   <div className="container">

     <div className="row">
       <div className="col-md-12 mx-auto text-center">
       <div>  <ClipLoader  size={50} /></div>

       </div>
     </div>
   </div>
  )
}

export default Loading
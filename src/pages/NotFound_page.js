import React, { useEffect } from 'react'

const NotFound_page = () => {
  useEffect(() => {
    document.title = "404 | NOT FOUND";
  }, []);
  return (
    <div style={{color:"white" ,fontSize:"40px",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      404 | NOT FOUND
    </div>
  )
}

export default NotFound_page

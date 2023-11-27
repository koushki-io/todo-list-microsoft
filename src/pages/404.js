import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {

      navigate("/myday")
  }, [])
  
  

  return (
    <h1>
      page not found
    </h1>
  )
}

export default NotFound

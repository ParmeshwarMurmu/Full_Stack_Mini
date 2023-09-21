import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Product = () => {

  const token = localStorage.getItem('token-E')
  const [data, setData] = useState([])


  useEffect(()=>{

    axios.get('http://localhost:9000/user/cart', {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  })
  .then((res)=>{
      console.log(res.data.msg)
      setData(res.data.msg)
     
  })
  .catch((err)=>{
      console.log(err);
  })
  }, [])

  return (
    <div>
      <h2>Products</h2>
     {
      data.map((el)=>(
        <div style={{border: "dashed", padding: "10px", marginBottom: "15px"}}>
           <h2>_id: {el.productId._id}</h2>

          <h2>Name: {el.productId.name}</h2>
          <h2>uername: {el.productId.username}</h2>
          <h2>address: {el.productId.address.city}</h2>
        </div>
      ))
     }
    </div>
  )
}

import { Button, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Components/ProductCard'

export const Home = () => {

  const [data, setData] = useState([])


  

  useEffect(()=>{
  
    axios.get('http://localhost:9000/')
      .then((res)=>{
          // console.log(res.data)
          setData(res.data.msg)
      })
      .catch((err)=>{
          console.log(err);
      })

  }, [])

  return (
    <>
    <Text fontSize={'2xl'}>All Users</Text>
    {
      data.map((el)=>(
        <div style={{border: "dashed", padding: "10px", marginBottom: "15px"}} key={el._id}>
          <ProductCard {...el} />
        </div>
      ))
    }
    </>
  )
}

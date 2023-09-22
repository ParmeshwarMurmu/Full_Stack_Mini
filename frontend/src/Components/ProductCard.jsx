import { Button, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

export const ProductCard = ({name, username, _id, address}) => {
    
    const token = localStorage.getItem('token-E')
    const toast = useToast()


    const handleCart = ()=>{
        axios.post('https://breakable-cloak-wasp.cyclic.cloud/user/addToCart', {productId: _id}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data)
           
            toast({
                title:  `${res.data.msg}`,
                // description:,
                status: 'success',
                duration: 3000,
                // isClosable: true,
              })
        })
        .catch((err)=>{
            console.log(err);
        })

    }

  return (
    <>
       <h2>_id: {_id}</h2>
          <h2>Name: {name}</h2>
          <h2>uername: {username}</h2>
          <h2>address: {address.city}</h2>
          <Button colorScheme='blue' mr={10} mt={5} onClick={handleCart}>Add To Cart</Button>
          <Button colorScheme='blue' mt={5}>Whilist</Button>
    </>
  )

}

import React, { useContext, useState } from 'react'
import { Button, Input, Stack } from '@chakra-ui/react'
import axios from "axios"
import { useToast } from '@chakra-ui/react'
import { appContent } from '../ContextApi/ContextApi'

export const Login = () => {

  const [userData, setUserData] = useState({})
  const {isAuth} = useContext(appContent)
    const toast = useToast()
    const {setIsAuth} = useContext(appContent)

    const handleChange = (e)=>{
        const {name, value} = e.target;
        userData[`${name}`] = value

    }

    const btnHandler = ()=>{
      // console.log("userData", userData)

      axios.post('http://localhost:9000/user/login', userData)
      .then((res)=>{
          console.log(res.data)
          localStorage.setItem('token-E', res.data.token)
          setIsAuth(true)
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
    <div>
        {
          isAuth ?  <Button colorScheme='blue'>Logout</Button>    : <Stack spacing={3}>
          <div>
          <label>Email</label>
          <Input type='email' placeholder='Email' name='email' size='md' onChange={handleChange} />
          </div>

          <div>
          <label>Password</label>
          <Input type='password' placeholder='Password' name='pass' size='md' onChange={handleChange}/>
          </div>

          <div>
              <div>
              <Button colorScheme='blue'  onClick={btnHandler}>Login</Button>
              </div>
          </div>

      </Stack>
        }
    </div>
  )
}

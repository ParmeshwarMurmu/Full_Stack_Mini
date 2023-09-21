import React, { useState } from 'react'
import { Button, Input, Stack } from '@chakra-ui/react'
import axios from "axios"
import { useToast } from '@chakra-ui/react'

export const SignUp = () => {

    const [userData, setUserData] = useState({})
    const toast = useToast()

    const handleChange = (e)=>{
        const {name, value} = e.target;
        userData[`${name}`] = value

    }

    const btnHandler = ()=>{
        // console.log("userData", userData)

        axios.post('http://localhost:9000/user/register', userData)
        .then((res)=>{
            console.log(res.data)
            toast({
                title: 'Account created.',
                description: `${res.data.msg}`,
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
            <Stack spacing={3}>
                <div>
                <label>User Name</label>
                <Input  type='text' placeholder='User Name' name='userName' size='md' onChange={handleChange} />
                </div>

                <div>
                <label>Email</label>
                <Input  type='email' placeholder='Email' name='email' size='md' onChange={handleChange} />
                </div>

                <div>
                <label>Password</label>
                <Input type='password'  placeholder='Password' name='pass' size='md' onChange={handleChange} />
                </div>

                <div>
                    <div>
                    <Button colorScheme='blue' onClick={btnHandler}>Register</Button>
                    </div>
                </div>

            </Stack>
        </div>
    )
}

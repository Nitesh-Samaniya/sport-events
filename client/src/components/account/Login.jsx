import { Button, Input, useToast } from '@chakra-ui/react'
import axios from "axios";
import { useState } from 'react';

const initState = {
    email: "",
    password: "",
}

const Login = () => {
    const [form, setForm] = useState(initState);
    const toast = useToast()

    const handleChange = (e)=>{
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
          });;
    }

    async function createAccount(e){
      e.preventDefault();

      await axios({
        url: "https://sport-event-mdcf.onrender.com/user/login",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        data: form
      })
        .then((res) => {
            console.log(res.data);
            toast({
              title: 'Account Created Successfully.',
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
        })
        .catch((e) => {
          if(e.response.data === "invalid credentials"){
            toast({
              title: 'invalid credentials',
              status: 'warning',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          }else{
            toast({
              title: 'Something went worng try again.',
              status: 'warning',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          }
        });

      setForm({
        email: "",
        password: ""
      });
    }

  return (
    <>
      <form onSubmit={createAccount}>
        
        <Input 
          type={"email"} 
          onChange={handleChange} 
          value={form.email} 
          name="email" 
          required="required"
          placeholder='Email' 
          mt={1} 
          />

        <Input 
          type={"password"} 
          onChange={handleChange} 
          value={form.password} 
          name="password" 
          required="required"
          placeholder='Password' 
          mt={10} 
        />

        <Button type='submit' mt={10} colorScheme='teal' size='md'>
            Create Account
        </Button>
        
      </form>
    </>
  )
}

export default Login
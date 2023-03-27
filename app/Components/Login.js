import React, {useState, useCallback} from "react";
import {login} from '../api';
import Input from './Input';

export default function Login({onLogin}){
    const [username, setusername] = useState('');
    const [pass, setPass] = useState('');
    const [invalidCred, setInvalidCred] = useState(false);

    const handleSubmit = useCallback(
        async(e) => {
            e.preventDefault();
            const res = await login(username, pass);

            if(res.user) return (window.location ='/');
            setInvalidCred(true);
        }, [username, pass]
    );
    
    return(
        <form onSubmit={handleSubmit}>
        <Input
          id="username"
          label="username"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
  
        <Input
          id="pass"
          label="Password"
          type="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
  
        <button type="submit">Log in</button>
  
        {invalidCred && <p>Invalid credentials</p>}
      </form>
    )
}
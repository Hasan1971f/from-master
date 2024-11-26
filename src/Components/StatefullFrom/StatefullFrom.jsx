import { useState } from "react";


const StatefullFrom = () => {
    
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    
    const [password, setPassword] = useState(null)

    const [error, setError] =useState('')

    const handleSubmit =e=>{
       e.preventDefault()

       if (password.length < 6) {
           setError('must be 6 characters or longer')
       }
       else{
          setError('')
          console.log(email, password, name)
       }

       
    }

    const handleNameChange =e=>{
        setName(e.target.value)
    }

    const handelEmailChange = e=>{
        // console.log(e.target.value)
        setEmail(e.target.value)

    }

    const handlePasswordChange= e=>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={ handleNameChange }
                type="text" name="name" />
                <br/>
                <input 
                onChange={handelEmailChange}
                type="email" name="email"/>
                <br/>
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" id="" required/>
                <br/>
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullFrom;
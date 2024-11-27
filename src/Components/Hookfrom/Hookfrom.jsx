import useInputState from "../../Hooks/useInputState";


const Hookfrom = () => {
//  const [name, handleNmaeChange] = useInputState('Rojoni hooked booked')
const emailState = useInputState('rojoni@sojoni.go')
    
 const handleSubmit = e =>{
       console.log('form Data', emailState.value)
    e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNmaeChange} type="text" name="name" />
                <br/> */}
                <input {... emailState} type="email" name="email"/>
                <br/>
                <input type="password" name="password" id=""/>
                <br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Hookfrom;
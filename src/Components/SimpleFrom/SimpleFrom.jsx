

const SimpleFrom = () => {

    const handleSubmit= e =>{
    
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    
        console.log('form submited')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br/>
                <input type="email" name="email"/>
                <br/>
                <input type="password" name="password" id=""/>
                <br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;
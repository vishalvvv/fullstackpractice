import React,{useState} from "react";
const Signup = () => {
const[data,setData] = useState({
    username : '',
    email : '',
    password : '',
    confirmPassword : '',
})
const {username,email,password,confirmPassword} = data;
const changehandler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler = e =>{
        e.preventDefault()
        if(password==confirmPassword){
        console.log(data);
        }
        else{
            console.log("passwords do not match");
        }
    }
return(
    <div>
        <center>
            <form onSubmit={submithandler}>
                <input type="text" name="username" value={username} onChange={changehandler}/> <br></br>
                <input type="email" name="email" value={email} onChange={changehandler}/> <br></br>
                <input type="password" name="password" value={password} onChange={changehandler} /> <br></br>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={changehandler} /> <br></br>

            </form>
        </center>
    </div>
)
}
export default Signup;
import { useState, useContext } from "react"
import axios from "axios"

function Test() {

    const [RegisterId, setRegisterId] = useState('')
    const [RegisterPassword, setRegisterPassword] = useState('')


    const onChangeRegisterId = (e) => {
        setRegisterId(e.target.value)
    }

    const onChangeRegisterPassword = (e) => {
        setRegisterPassword(e.target.value)
    }

    const onClickRegister = () => {
        console.log("ID: ",RegisterId)
        console.log("PW: ",RegisterPassword)
        axios.post("http://localhost:8080/api/test",{
            userId:RegisterId,
            userPasswd:RegisterPassword
        })
        .then((res)=>{
            console.log(res.data)

        })
        
    }

    return (
        <div>
            <input onChange={onChangeRegisterId}></input>
            <input onChange={onChangeRegisterPassword}></input>
            <button onClick={onClickRegister}>회원가입</button>
        </div>
    )
}

export default Test;
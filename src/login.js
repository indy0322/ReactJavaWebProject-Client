import { useState, useContext } from "react"
import { Form, Button, InputGroup, Card, Modal,  } from "react-bootstrap"
import axios from "axios"


function Login() {

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
        axios.post("/api/register",{
            userId:RegisterId,
            userPasswd:RegisterPassword
        })
        .then((res)=>{
            console.log(res.data)
            if(res.data == "존재하는 아이디 입니다"){
                alert("존재하는 아이디 입니다")
            }
            else if(res.data == "아이디, 비밀번호를 제대로 입력해주세요"){
                alert("아이디, 비밀번호를 제대로 입력해주세요")
            }
            else{
                alert(res.data + " 님 회원가입이 완료되었습니다.")
            }
        })
    }


    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                ID
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onChangeRegisterId}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                Password
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={onChangeRegisterPassword}
                />
            </InputGroup>

            <Button variant="primary" size="sm" onClick={onClickRegister}>회원가입</Button>
        </div>
    );
}

export default Login;
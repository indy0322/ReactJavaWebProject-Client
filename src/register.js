import { useState, useContext } from "react"
import { Form, Button, InputGroup, Card, Modal, Navbar, Container, Nav } from "react-bootstrap"
import axios from "axios"


function Register() {

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
        axios.post("http://localhost:8080/api/register",{
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
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                
                
                
                
                
                </Container>
                
            </Navbar>

            <div className="d-flex justify-content-center align-items-center vh-100 signup"> 
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" className="bg-dark text-white">
                    ID
                    </InputGroup.Text>
                    <Form.Control
                    className="bg-dark text-white"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={onChangeRegisterId}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" className="bg-dark text-white">
                    Password
                    </InputGroup.Text>
                    <Form.Control
                    className="bg-dark text-white"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={onChangeRegisterPassword}
                    />
                </InputGroup>
                

                <Button variant="primary" size="lg" className="py-2 px-4" onClick={onClickRegister}>Sign in</Button>
                
            </div>
            

            
            
        </div>
    );
}

export default Register;
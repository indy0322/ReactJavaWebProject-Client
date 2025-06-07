import { useState, useContext } from "react"
import { Form, Button, InputGroup, Card, Modal, Navbar, Container, Nav } from "react-bootstrap"
import axios from "axios"


function Login() {

    const [RegisterId, setRegisterId] = useState('')
    const [RegisterPassword, setRegisterPassword] = useState('')

    const [showCard, setShowCard] = useState(true);

    const handleOutsideClick = () => {
        setShowCard(false);
    };

    const showSignInCard = () => {
        setShowCard(true);
    }
    
    const handleCardClick = (e) => {
        e.stopPropagation(); // 카드 클릭 시 외부 클릭으로 인식되지 않도록 함
    };

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
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                
                <Button variant="outline-success" onClick={showSignInCard}>Sign in</Button>
                {/*<Button variant="outline-success">Sign up</Button>*/}
                </Container>
                
            </Navbar>
            <div className="d-flex justify-content-center align-items-center vh-100" onClick={handleOutsideClick}>
                {showCard && 
                    <Card style={{ width: '40rem', height: '25rem' }} onClick={handleCardClick}>
                        <Card.Body className="d-flex flex-column justify-content-between align-items-center h-100">
                            
                            <Card.Title className="text-center mb-4">Welcome</Card.Title>
                            
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
                            
                        </Card.Body>
                    </Card>
                }
            </div>
            
        </div>
    );
}

export default Login;
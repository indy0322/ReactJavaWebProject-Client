import { useState, useContext } from "react"
import { Form, Button, InputGroup, Card, Modal, Navbar, Container, Nav } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const [loginId, setLoginId] = useState('')
    const [loginPasswd, setLoginPasswd] = useState('')

    const [showSignInCard, setShowSignInCard] = useState(true);
    

    const handleOutsideClickSignIn = () => {
        setShowSignInCard(false);  
    };

    const handleSignUpClick = () => {
        navigate('/register'); 
      }; 


    const clickShowSignInCard = () => {
        setShowSignInCard(true);
    }

    
    const handleCardClick = (e) => {
        e.stopPropagation(); // 카드 클릭 시 외부 클릭으로 인식되지 않도록 함
    };

    const onChangeLoginId = (e) => {
        setLoginId(e.target.value)
    }

    const onChangeLoginPassword = (e) => {
        setLoginPasswd(e.target.value)
    }

    

    const onClickLogin = () => {
        axios.post("/api/login",{
            userId:loginId,
            userPasswd:loginPasswd
        })
        .then((res)=>{
            console.log(res.data)
            if(res.data == "존재하지 않는 사용자 입니다."){
                alert("존재하지 않는 사용자 입니다.")
            }
            else if(res.data == "비빌번호가 다릅니다."){
                alert("비빌번호가 다릅니다.")
            }
            else if(res.data == "로그인에 실패했습니다."){
                alert("로그인에 실패했습니다.")
            }
            else{
                localStorage.removeItem("user")
                localStorage.setItem("user",res.data)
                window.location.href = '/main'
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
                
                <Button variant="outline-success" onClick={clickShowSignInCard}>Sign in</Button>
                
                
                {/*<Button variant="outline-success">Sign up</Button>*/}
                </Container>
                
            </Navbar>
            <div className="d-flex justify-content-center align-items-center vh-100 signin" onClick={handleOutsideClickSignIn}>
                {showSignInCard && 
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
                                onChange={onChangeLoginId}
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
                                onChange={onChangeLoginPassword}
                                />
                            </InputGroup>
                            

                            <div className="d-flex gap-3">
                                <Button variant="primary" size="lg" className="py-2 px-4" onClick={onClickLogin}>Sign in</Button>
                                <Button variant="success" size="lg" className="py-2 px-4" onClick={handleSignUpClick}>Sign up</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                }
            </div>

            
            
        </div>
    );
}

export default Login;
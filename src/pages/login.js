import { useState, useContext } from "react"
import { Form, Button, InputGroup, Card, Modal, Navbar, Container, Nav, Alert } from "react-bootstrap"
import axios from "axios"



function Login() {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); //페이지의 새로고침을 막는다.

        if (userId === '' || password === '') {
            setMessage('아이디와 비밀번호를 입력해주세요.');
            return;
        }else{
            try{
                const response = await axios.post("/api/login", {
                    userId:userId,
                    userPasswd:password
                });
                console.log(response.data)
            }catch(error){
                console.error(error);
                setMessage("로그인에 실패하였습니다.");
            }
        }



    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow-sm">
            <Card.Body>
                <h3 className="text-center mb-4">로그인</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formUserId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    로그인
                </Button>
                </Form>
            </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;
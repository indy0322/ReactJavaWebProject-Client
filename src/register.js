import { useState, useContext } from "react"
import { Form, Button, InputGroup, Card, Modal, Navbar, Container, Nav, Alert} from "react-bootstrap"
import axios from "axios"


function Register() {

    const [RegisterId, setRegisterId] = useState('')
    const [RegisterPassword, setRegisterPassword] = useState('')
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/register", {
                userId:RegisterId,
                userPasswd:RegisterPassword
            });
            setMessage(`서버 응답: ${response.data}`);
        } catch (error) {
            console.error(error);
            setMessage("회원가입 실패");
        }
    };

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: "100%", maxWidth: "400px" }} className="shadow">
                    <Card.Body>
                    <h3 className="mb-4 text-center">회원가입</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="RegisterId">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setRegisterId(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="RegisterPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <div className="d-grid">
                        <Button variant="primary" type="submit">
                            회원가입
                        </Button>
                        </div>
                    </Form>

                    {message && (
                        <Alert variant="info" className="mt-3">
                        {message}
                        </Alert>
                    )}
                    </Card.Body>
                </Card>
            </Container>
            
        </div>
    );
}

export default Register;
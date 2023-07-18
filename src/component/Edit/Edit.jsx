import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Edit() {
    const formData = JSON.parse(localStorage.getItem("formData")) || [];
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState(formData[formData.length - 1] || {});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = [...formData];
        updatedData[updatedData.length - 1] = inputValue;
        localStorage.setItem("formData", JSON.stringify(updatedData));
        navigate("/preview");
    };

    return (
        <div>
            <Container >
                <Form onSubmit={handleSubmit}>
                    <Row className="">
                        <Form.Group className="col-6 mb-3" controlId="formGridEmail" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" name="fname" value={inputValue.fname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="col-6 mb-3" controlId="formGridEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name="lname" value={inputValue.lname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="col-6 mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={inputValue.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="col-6 mb-3" controlId="formGridPassword">
                            <Form.Label>Offecial email</Form.Label>
                            <Form.Control type="text" placeholder="Offecial Email" name="ofemail" value={inputValue.ofemail} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formGridAddress1">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control placeholder="Mobile" name="mobile" value={inputValue.mobile} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formGridAddress2">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control placeholder="Designation" name="designation" value={inputValue.designation} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" value={inputValue.city} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="zip" value={inputValue.zip} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Edit;

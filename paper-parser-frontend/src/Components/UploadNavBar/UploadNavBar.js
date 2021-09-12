import React, { useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap'
import axios from 'axios';

import './UploadNavBar.css';

function UploadNavBar(props){
    const [files, setFiles] = useState([]);

    function handleFileChange(event) {
        console.log("handling file changes");
        setFiles(event.target.files);
    }

    function handleUpload() {
        console.log("Uploading documents");

        const formData = new FormData();

        // [0] only uploads the first file 
        // TODO: remove [0] and integrate 
        formData.append(
            "file",
            files[0],
        );

        // Details of the uploaded file
        console.log(files);

        let filename = files[0].name.slice(0, -4);

        try {
            axios.post('http://localhost:5000/upload', formData, {
                params: {
                    filename: filename
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }


    return(
        <Navbar bg='dark' variant="dark" sticky="top">
            <Container>
                <Navbar.Brand>PAPER PARSER</Navbar.Brand>
                <Form>
                    <Form.Group className="horizontal_form">
                        <Form.Control type="file" multiple onChange={handleFileChange} />
                        <Button variant="secondary" onClick={handleUpload}>Upload</Button>
                    </Form.Group>
                </Form>
            </Container>
        </Navbar>
    );
}

export default UploadNavBar;
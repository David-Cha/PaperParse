import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

function Interface(props){
    // const [ canSearch, setCanSearch ] = useState(false);
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ files, setFiles ] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        
    }

    function handleFileChange(event){
        console.log("handling file changes");
        setFiles(event.target.files);
    }

    function handleUpload(){
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
        
        let filename = files.slice(0, -4);

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
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="what do you want to know?" value={searchQuery} onInput={e => setSearchQuery(e.target.value)} />
                <div>
                    <Form.Control type="file" multiple onChange={handleFileChange}/>
                    <Button variant="secondary" onClick={handleUpload}>Upload</Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Search</Button>
                </div>
            </Form.Group>
        </Form>

    );
}

export default Interface;
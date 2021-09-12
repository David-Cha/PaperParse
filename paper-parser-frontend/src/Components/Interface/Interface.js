import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

import './Interface.css';


function Interface(props){
    // const [ canSearch, setCanSearch ] = useState(false);
    const [ searchQuery, setSearchQuery ] = useState("");

    async function handleSubmit(event){
        event.preventDefault();
        var res = await axios.get("http://localhost:5000/search", {
            params: {
                text: searchQuery
            }
        })
        console.log(res.data);
        props.setResults(res.data);
    }

    return(
        <Form>
            <Form.Group className="horizontal_form">
                <Form.Control type="text" placeholder="what do you want to know?" value={searchQuery} onInput={e => setSearchQuery(e.target.value)} />
                <Button variant="primary" type="submit" onClick={handleSubmit}>Search</Button>
            </Form.Group>
        </Form>

    );
}

export default Interface;
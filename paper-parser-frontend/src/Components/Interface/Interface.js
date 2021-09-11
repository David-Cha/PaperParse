import React from 'react';
import { Form } from 'react-bootstrap'

function Interface(props){
    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="what do you want to know?"/>
                <div>
                    <Form.Control type="file"/>
                    <Form.Control type="submit"/>
                </div>
            </Form.Group>
        </Form>

    );
}

export default Interface;
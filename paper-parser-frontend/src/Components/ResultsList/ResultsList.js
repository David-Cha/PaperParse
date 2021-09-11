import React from 'react';
import { Card } from 'react-bootstrap';

// takes in a prop named result, which is an object that contains three fields:
// article_title, page_number, sentence
function Result(props){
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {props.result.article_title}
                </Card.Title>
                <Card.Text>
                    Page Number: {props.result.page_number.toString()}
                </Card.Text>
                <Card.Text>
                    {props.result.sentence}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Result;
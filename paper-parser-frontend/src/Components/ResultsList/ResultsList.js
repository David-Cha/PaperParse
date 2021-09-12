import React from 'react';
import { Card } from 'react-bootstrap';

import './ResultsList.css';

// takes in a prop named result, which is an object that contains three fields:
// article_title, page_number, sentence
function Result(props){
    return(
        <Card bg="light" className="result">
            <Card.Body>
                <Card.Title>
                    <b>{props.result.article_title}</b>
                </Card.Title>
                <div className="horizontal">
                    <Card.Text className="right_margin">
                        Page: {props.result.page_number.toString()}
                    </Card.Text>
                    <Card.Text>
                        Score: {props.result.score.toString()}
                    </Card.Text>
                </div>
                
                <hr/>
                <Card.Text>
                    {props.result.sentence}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

// displays a list of results using the Results component
// takes an array of results, which are all objects
function ResultsList(props){
    const list =  props.results.map((result) => 
        <Result result={result}/>
    );
    return(
        <div>
            {list}
        </div>
    );
}

export default ResultsList;
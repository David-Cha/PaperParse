import React from 'react';
import { Card } from 'react-bootstrap';

import './ResultsList.css';

// takes in a prop named result, which is an object that contains three fields:
// article_title, page_number, sentence
function Result(props){
    return(
        <Card className="result">
            <Card.Body>
                <Card.Title>
                    <b>{props.result.article_title.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</b>
                </Card.Title>
                <div className="horizontal">
                    <Card.Text className="right_margin">
                        <i>Page: {props.result.page_number.toString()}</i>
                    </Card.Text>
                    <Card.Text>
                        <i>Score: {props.result.score.toString()}</i>
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
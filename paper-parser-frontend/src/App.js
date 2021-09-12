import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Interface from './Components/Interface/Interface';
import ResultsList from './Components/ResultsList/ResultsList'
import UploadNavBar from './Components/UploadNavBar/UploadNavBar'

let testresult = {
  article_title: "Math",
  page_number: 1,
  score: 23.56,
  sentence: "e to the i pi squared minus 1 equals 0"
}

let testresult2 = {
  article_title: "Physics",
  page_number: 100,
  score: 1.23,
  sentence: "E equals m c squared"
}

let testresult3 = {
  article_title: "Math",
  page_number: 1,
  score: 23.56,
  sentence: "e to the i pi squared minus 1 equals 0"
}

let testresult4 = {
  article_title: "Math",
  page_number: 1,
  score: 23.56,
  sentence: "e to the i pi squared minus 1 equals 0"
}

let testresult5 = {
  article_title: "Math",
  page_number: 1,
  score: 23.56,
  sentence: "e to the i pi squared minus 1 equals 0"
}

let testresult6 = {
  article_title: "Math",
  page_number: 1,
  score: 23.56,
  sentence: "e to the i pi squared minus 1 equals 0"
}

let testResultList = [testresult, testresult2,  testresult3, testresult4, testresult5, testresult6]

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="main_parent">
      <UploadNavBar/>
      <Interface setResults={setResults}/>
      <ResultsList results={results} />
    </div>
    
  );
}

export default App;

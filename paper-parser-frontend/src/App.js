import logo from './logo.svg';
import './App.css';

import Interface from './Components/Interface/Interface';
import ResultsList from './Components/ResultsList/ResultsList'

let testresult = {
  article_title: "Math",
  page_number: 1,
  sentence: "e to the i pi squared minus 1 equals 0"
}

let testresult2 = {
  article_title: "Physics",
  page_number: 100,
  sentence: "E equals m c squared"
}

let testResultList = []

function App() {
  return (
    <div>
      <Interface />
      <ResultsList results={testResultList} />
    </div>
    
  );
}

export default App;

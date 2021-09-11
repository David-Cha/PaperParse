import logo from './logo.svg';
import './App.css';

import Interface from './Components/Interface/Interface';
import Result from './Components/ResultsList/ResultsList'

let testresult = {
  article_title: "Math",
  page_number: 1,
  sentence: "e to the i pi squared minus 1 equals 0"
}

function App() {
  return (
    <Result result={testresult}/>
  );
}

export default App;

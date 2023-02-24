import logo from './logo.svg';
import './App.css';
import CountButton from './components/Buttons/CountButton';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <CountButton incrementBy={2}/>
      <CountButton incrementBy={5}/> */}
      <SearchBar/>
    </div>
  );
}

export default App;

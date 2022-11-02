import './App.css';
import Start from './pages/start';


function App() {
  const style = { 

    backgroundColor : 'black',
    color : 'white'

  }
  return (
    <div className="App">
      <Start/>
      <div style={style}> <Start/> 색상 </div>
    </div>
  );
}

export default App;

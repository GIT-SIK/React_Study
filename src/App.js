import './App.css';
import Start from './pages/start';
import Pages1 from './pages/pages1';
import PagesOne, {PagesTwo} from './pages/pages2';


function App() {
  const style = { 

    backgroundColor : 'black',
    color : 'white'

  }
  return (
    <div className="App">
      <Start/>
      <div style={style}> <Start/> 색상 </div>
      <Pages1 name="Page1 Tester"/>
      <hr/>
      <PagesOne/>
      <PagesTwo/>
    </div>
  
  );
}

export default App;

import { Task } from './components/Task';
import { Header } from './components/Header';
import './App.css';

function App(){
  const info="Random";
  
  return (
    <div className="App">
        <Header/>
        <Task info={info}/>
        
    </div>
  );
}
export default App;

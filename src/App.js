import { Task } from './components/Task';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App(){
  const info="Random";
  
  return (
    <div className="App">
        <Header/>
        <Task info={info}/>
        <Footer/>
    </div>
  );
}
export default App;

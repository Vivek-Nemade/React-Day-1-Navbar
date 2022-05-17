
import './App.css';
import Logo from './components/Logo';
import Links from './components/Links';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <div className="Mid_Links">
      <Links ></Links>
      </div>
      
      <Button className="Right-button"></Button>
    </div>
  );
}

export default App;

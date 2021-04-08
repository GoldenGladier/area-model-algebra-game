import './App.css';
// IMPORTANDO COMPONENTES
import ItemMenu from './components/itemMenu';

function App() {
  return (
    <div className="App">
      <h1>Choose Your Level!</h1>
      <div className="content">
        <ItemMenu name="Low" number="01"/>
        <ItemMenu name="Low-Medium" number="02"/>
        <ItemMenu name="Medium" number="03"/>
        <ItemMenu name="High" number="04"/>
        <ItemMenu name="Very High" number="05"/>
        <ItemMenu name="Insane" number="06"/>        
      </div>
    </div>
  );
}

export default App;

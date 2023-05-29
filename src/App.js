import './App.css';
import Body from './components/layout/Body/Body';
import ContactMe from './components/layout/Body/ContactMe';
import Header from './components/layout/Header/Header';


function App() {
  return (
    <div className="App">
       <Header/>
       <Body/>
       <ContactMe/>
    </div>
  );
}

export default App;

import './App.css';
import Body from './components/layout/Body/Body';
import ContactMe from './components/layout/Body/ContactMe';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';


function App() {
  return (
    <div className="App">
       <Header/>
       <Body/>
       <ContactMe/>
       <Footer/>
    </div>
  );
}

export default App;

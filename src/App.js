import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="card-wrapper">
        <Header />
        <Buttons />
        <Content />
        <Footer />        
      </div>
    </div>
  );
}

export default App;

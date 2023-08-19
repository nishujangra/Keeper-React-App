import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="note">
        <h1>This is the note title</h1>
        <p>This is the note content</p>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import notes from './notes';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="note-group">
        {notes.map((note) => <Note key={note.key} title={note.title} content={note.content} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;

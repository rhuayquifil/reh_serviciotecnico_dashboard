import './App.css';
import { Cards } from './components/Cards';
import { CarouselSlide } from './components/CarouselSlide';
import  { Header }  from './components/Header';
import { QuestionsFrequently } from './components/QuestionsFrequently ';
import { Ubication } from './components/Ubication';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselSlide />
      <Cards />
      <Ubication />
      <QuestionsFrequently />
      <h4>Nosotros</h4>
      <h4>Terminos y condiciones</h4>
    </div>
  );
}

export default App;

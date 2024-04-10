import Navbar from './components/Navigation';
import Card from './components/card';
import "./styles.css"

function App() {

  const nombres = ["Diegod", "Rauloo", "Erwinner", "Laura", "Fernando", "Ana", "Pedro", "Deivid", "Daniel", "Cesar War"];
  const descripciones = [
      "Es un increíble personaje",
      "Es un antagonista",
      "Es un badguy",
      "Es una superheroína",
      "Es un aliado confiable",
      "Es un misterioso personaje",
      "Es un personaje secundario",
      "Es un increíble personaje",
      "Es un antagonista",
      "Es un badguy",
  ];

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const randomCards = Array.from({ length: 10 }, (_, index) => (
    <Card
        key={index}
        name={nombres[randomInt(0, nombres.length - 1)]}
        descripcion={descripciones[randomInt(0, descripciones.length - 1)]}
    />
  ));

  return (
    <div className='grid justify-items-center'>
      <Navbar/>
      <section className='grid grid-cols-5 place-content-center'>
        {randomCards}
      </section>
    </div>
  );
}

export default App;

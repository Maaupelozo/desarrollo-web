import {useState} from 'react'; 
function About() {
  const [mostrarMas, setMostrarMas] = useState(false);
  return (
    <section>
      <h2 className='text-2xl font-lob'>Sobre mi</h2>
      <p>Soy desarrollador web con experiencia en React y Node.js.</p>
      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Mostrar menos' : 'Mostrar más'}
      </button>
    </section>
  )
  ;
}
export default About;
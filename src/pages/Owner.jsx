import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/styles/Owner.css'
import yo from '../assets/yo.jpeg'

export default function Owner() {
  const [peliculasFavoritas] = useState([
    'Memento',
    'El Efecto Mariposa',
    'Donnie Darko'
  ]);

  return (
    <div className="owner-container">
      <Header />
      <h1 className="owner-title">¡Bienvenido, Ernesto González!</h1>
      <img className="owner-image" src={yo} alt="Ernesto González" />
      <h2 className="owner-name">Ernesto González</h2>
      <p className="owner-description">
        Ingeniero industrial y desarrollador fullstack en formación. Apasionado por la música, el cine y la tecnología.
      </p>
      <p className="owner-contact">✉️ Contacto: <a href="mailto:ernesto.gonzalez@email.com">ernesto.gonzalez@email.com</a></p>

      <h2 className="owner-subtitle">Mis películas favoritas son:</h2>
      <ol className="owner-list">
        {peliculasFavoritas.map((pelicula, index) => (
          <li key={index}>{pelicula}</li>
        ))}
      </ol>
      <br /><br /><hr />
      <Footer />
    </div>
  )
}

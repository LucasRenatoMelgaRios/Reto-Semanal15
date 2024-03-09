import { Header } from './components/Header'
import { MainContainer } from './components/MainContainer'



function App() {

  let pelis = [
    {
      img: 'https://image.tmdb.org/t/p/w300/roKMM6S9DRGFNujmvqlk8l5YbN3.jpg',
      titulo: 'Harry Potter y la piedra filosofal',
      genero: 'Aventura, Fantasía',
      descripcion:
        'El día en que cumple once años, Harry Potter se entera de que es hijo de dos destacados hechiceros, de los que ha heredado poderes mágicos. ',
      id: 1,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/z9UUfYZzKVBCEFs6TnCdAp5mUbJ.jpg',
      titulo: 'Willow',
      genero: 'Acción, Aventura, Fantasía',
      descripcion:
        'Temerosa de que una profecía declare que una niña nacerá para provocar su caída, la malvada Reina Bavmorda encarcela a todas las mujeres embarazadas dentro de la formidable fortaleza de Nockmaar.',
      id: 2,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/qf5bntGx2p5kQKO7zUbHrbOx9pp.jpg',
      titulo: 'Dune',
      genero: 'Aventura, Ciencia ficción',
      descripcion:
        'Paul Atreides, un joven brillante y talentoso nacido en un gran destino más allá de su entendimiento, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y de su pueblo.',
      id: 3,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/uu6RaEAfkIQaolf20axWaRU4h3w.jpg',
      titulo: 'Mi vecino Totoro',
      genero: 'Animación, Familia, Fantasía',
      descripcion:
        'Dos chicas jóvenes, Mei y Satsuki, se mudan a una nueva casa cerca del hospital en el que se encuentra su madre. En el patio junto a la casa ,existe un gran árbol que es el hogar de tres Totoros, dioses de la selva.',
      id: 4,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg',
      titulo: 'Guardianes de la Galaxia',
      genero: 'Acción, Aventura, Ciencia ficción',
      descripcion:
        'Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en torno a él para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se lleva a cabo con éxito, podría suponer el fin de los Guardianes tal y como los conocemos.',
      id: 5,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg',
      titulo: 'John Wick',
      genero: 'Acción, Crimen, Suspense',
      descripcion:
        'John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.',
      id: 6,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/bqOqQ2Tawum3eHKNrc94P4EeaZB.jpg',
      titulo: 'Avatar: El camino del agua',
      genero: 'Acción, Aventura, Ciencia ficción',
      descripcion:
        'Más de una década después de los acontecimientos de Avatar, los Navi Jake Sully, Neytiri y sus hijos viven en paz en los bosques de Pandora hasta que regresan los hombres del cielo.',
      id: 7,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/yTzr6Nc4RcTXVw9SsWQNJdcjTz5.jpg',
      titulo: 'Aquaman',
      genero: 'Acción, Aventura, Fantasía',
      descripcion:
        'Cuando Arthur Curry (Jason Momoa) descubre que es mitad humano y mitad atlante, emprenderá el viaje de su vida en esta aventura que no sólo le obligará a enfrentarse a quién es en realidad, sino también a descubrir si es digno de cumplir con su destino.',
      id: 8,
    },
    {
      img: 'https://image.tmdb.org/t/p/w300/1r8TWaAExHbFRzyqT3Vcbq1XZQb.jpg',
      titulo: 'Jurassic Park',
      genero: 'Aventura, Ciencia ficción',
      descripcion:
        'El multimillonario John Hammond tiene una idea para un espectacular parque temático: una isla retirada donde los visitantes puedan observar dinosaurios reales.',
      id: 9,
    },
  ];


  return (
    <>
      <Header />
      <MainContainer pelis={pelis}></MainContainer>
    </>
  )
}

export default App

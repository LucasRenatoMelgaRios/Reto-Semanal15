import styled from 'styled-components';


const GridContainer = styled.section`
    width: 100%; /* Ocupa el 100% del ancho de la pantalla */
    max-width: 1500px; /* Máximo ancho de 1500px */
    margin: 0 auto; /* Centra horizontalmente */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 3 columnas en pantallas más anchas, ajusta automáticamente el tamaño */
    grid-auto-rows: min-content;
    justify-items: center;
    gap: 50px;
    margin-top: 40px;
    @media (max-width: 1200px) { /* Media query para pantallas más pequeñas */
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 2 columnas */
    }
    
`;

const Card = styled.div`
    
`;


export const MainContainer = ({pelis}) =>{



    return(
        <>
        <GridContainer>
            {pelis.map(pelicula => (
              <Card key={pelicula.id}>
                  <img src={pelicula.img} alt="" />
              </Card>
            ))}
        </GridContainer>
        </>
    )
}


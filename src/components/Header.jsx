import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";


// Definir el componente de encabezado usando styled-components
const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
`;

const LogoContainer = styled.div`
    width: 140px;
    height: 100px;

    img{
        width: 100%;
    }
`;

const Buscador = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 20px;
    padding-left: 50px;
`;

const BotonBuscar = styled.button`
    padding: 20px;
    background-color: #007286;
    color: white;
    border: 0;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 60px;
    letter-spacing: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
`;

const BotonYBuscadorContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
   
`;

const StyledSearchIcon = styled(FaSearch)`
  /* Estilos personalizados para el icono */
  position: absolute;
  margin-right: 590px;
`;



// Definir un componente funcional que representará el encabezado
export const Header = () => {
  return (
   
    <HeaderContainer>
      <LogoContainer>
      <img src="https://wwe.cinecalidad.gg/wp-content/themes/Cinecalidad/assets/img/logo.svg?v=1aaaaaa.0" />      </LogoContainer>
       <BotonYBuscadorContainer>
       <Buscador placeholder="Buscar pelicula..."/>
       <StyledSearchIcon/>

        <BotonBuscar>Buscar</BotonBuscar>
       </BotonYBuscadorContainer>
    </HeaderContainer>
  );
};
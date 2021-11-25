import styled from "styled-components"
import Cards from "./components/Cards";

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

function App() {

    const carsDetails = {
        sedan: {
            type: 'Sedan',
            description:
                'Choose a sedan for its affordability and ' +
                'excellent fuel economy. Ideal for cruising ' +
                'in the city or on your next road trip.',
            color: 'hsl(31, 77%, 52%)',
            image: "public/../iconSedan.png",
            border: "10px 0 0 10px"
        },
        suv: {
            type: 'Suvs',
            description:
                'Take an SUV for its spacious interior, power, and versatility. ' +
                'Perfect for your next family vacation and off-road adventures. ',
            color: 'hsl(184, 100%, 22%)',
            image: "public/../iconSuvs.png",
            border: "0"
        },
        luxury: {
            type: 'Luxury',
            description:
                'Cruise in the best car brands without the bloated ' +
                'prices. Enjoy the enhanced comfort of a luxury rental ' +
                ' and arrive in style.',
            color: 'hsl(179, 100%, 13%)',
            image: "public/../iconLuxury.png",
            border: "0 10px 10px 0"
        }
    }

    return (
        <Container>
            <Cards detail={carsDetails.sedan}/>
            <Cards detail={carsDetails.suv}/>
            <Cards detail={carsDetails.luxury}/>
        </Container>
    );
}

export default App;

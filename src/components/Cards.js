import Cart from "./Cart";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  width: fit-content;
  height: inherit;
  border-radius: ${props => props.border};
  padding: 50px 75px 50px 50px;
  color: white;
  background-color: ${props => props.color || "grey"};
`

const Text = styled.span`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 13px;
`
const TextFiled = styled.div`
  flex: 0 1 auto;
  text-align: left;
  max-width: 155px;
  margin-bottom: 58px;
  line-height: 1.5;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 45px;
  font-family: 'Big Shoulders Display', cursive;
`

const Button = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: white;
  color: ${props => props.color || "grey"};
  transition-duration: 1000ms;

  &:hover {
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
`

const Cards = ({detail}) => {
    const {type, description, color, image, border} = detail

    return (
        <Cart>
            <MainContainer color={color} border={border}>
                <img src={image} alt={type}/>
                <Title>{type}</Title>
                <TextFiled>
                    <Text>{description}</Text>
                </TextFiled>
                <Button color={color}>
                    <Text>
                        Learn More
                    </Text>
                </Button>
            </MainContainer>
        </Cart>
    )
}

export default Cards
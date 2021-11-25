import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 920px;
  min-height: 550px;
  height: 400px;
`

const Cart = props => {
    return (
        <Wrapper>{props.children}</Wrapper>
    )
}

export default Cart

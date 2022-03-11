import styled from 'styled-components'

export const NavLink = styled.a
`transition: all 0.3s ease-in-out;
color:#000;
&.active,
&:hover{
    color: #61E689;
    border-bottom:2px solid #61E689;
}

`
export const CartIcon = styled.div 
`&::after{
    display:none;
}
`
import styled from 'styled-components'
import { fixedColor, fontSize, greenColor, textColor } from '../Utilites'



export const NavBar = styled.section 
`
.bars-icon{
   display:none;
   cursor:pointer;
   @media(max-width:767px){
       display:block;
   }
}
.nav-link{
    transition: all 0.3s ease-in-out;
    color:#000;
    &.active,
    &:hover{
        color: #61E689;
        border-bottom:2px solid #61E689;
    }
}
.cart{
    .cartIcon{
        svg{
            cursor:pointer;
        }
        span{
            background:#CC9966;
        }
    }
   
   .dropdown-menu{
    left: initial;
    right: 0;
    padding: 25px 30px;
    border-color: #ececec;
    box-shadow: 0px 0px 13px -4px #CCC;
    min-width: 12rem;
    width: max-content;
    max-height: 500px;
    overflow-y: scroll;
    .item{
        color:${textColor};
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #DDD;
        padding: 15px 0;
        .product-details {
            font-size:${fontSize};
            h4{
                font-size:${fontSize};
                text-transform: capitalize;
            }
        }
        .product-img{
            width:65px;
            height:65px;
        }
    }
    .price-total{
        text-transform: uppercase;
        margin-top: 12px;
        color:${textColor}
    }
    .view-cart{
        text-decoration: none;
        color: #FFF;
        background: ${fixedColor};
        padding: 10px 15px;
        display: inline-block;
        transition:background 0.5s ease-in-out;
        &:hover{
            background:${greenColor}
        }
    }

   }
}
`
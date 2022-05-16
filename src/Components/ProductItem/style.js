import styled from "styled-components"
// import { textColor } from "../Utilites"


export const Item = styled.tr
`
   
    .item-img{
        width:90px;
    }

.item-control{
    border: 1px solid #DDD;
    padding: 10px;
    text-align: center;
    .control-box{
        border:1px solid #666;
        width: fit-content;
        margin: auto;
        padding: 5px;
        span{
            cursor:pointer;
        }
        input{
            width: 50px;
            border: none;
            text-align:center;
        }
    }
}
`
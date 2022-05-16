import styled from "styled-components";
import { fontSize, textColor } from "../Utilites";

export const Section = styled.nav
`padding:15px 10px;
border-bottom:1px solid #DDD;
.breadcrumb{
    .breadcrumb-item{
        font-size:${fontSize};
        font-weight: 100;
        a{
            color:${textColor};
            text-decoration:none;
        }
        &:last-child{
            color:#000;
        }
    }
    .breadcrumb-item+.breadcrumb-item::before{
        content:">";
    }
}
`
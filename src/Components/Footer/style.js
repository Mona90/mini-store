import styled from "styled-components";
import { fixedColor, fontSize, textColor } from "../Utilites";
export const FooterSection = styled.footer
`
.social-media{
    font-size:${fontSize};
    font-weight:100;
   .social-icon{
       &:not(:last-child){
           margin-right:5px;
       }
       &:hover{
           color:${fixedColor} !important;
       }
   }
}
.details{
    font-size:${fontSize};
    font-weight:100;
    color:${textColor};
    .footer-menu{
        a{
            color:${textColor};
            font-size:${fontSize}
        }
    }
}
`

// function setcolor(){
//     const colors =["#8f79ed", "#79c8ed","#e66262","#e66262"]

//     for(let i =0; i < colors.length; i++ ){
       
//     }
// }
// // export const SocialIcon = styled.a.attrs(props=>({
// //     style:`{{color:"#000"}}`
// //     // type: "password"
// // }))


// for(let i =0; i < SocialIcon.length; i++ ){
//     if(SocialIcon[i] === colors[i]){
//         style=`{{color:${colors[i]}}}`

//     }
//     return style
// }
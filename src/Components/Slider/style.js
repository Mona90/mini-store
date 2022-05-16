import styled from "styled-components";
export const Section = styled.section
`
.owl-dots{
    position: absolute;
    bottom: 0;
    width: 100%;
}
`

export const Content = styled.div 
`
    height:100vh;
    max-height:500px;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    color:#FFF;
    .container{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        .title{
            font-weight: 600;
            width: 400px;
            font-size: 3.4rem;
            @media(max-width:767px){
                width: 305px;
                font-size: 2.4rem;
            }
        }
        .price{
            color: #CC9966;
            font-size: 14px;
            sub{
                font-size: 30px;
                font-weight: 700;
            }
        }
        .shop-now{
            font-size: 13px;
            color: inherit;
            border: 1px solid #FFF;
            padding: 13px;
            text-decoration:none;
            transition:all 0.3s ease-in-out;
            margin-top: 10px;
            display: inline-block;
            svg{
                font-size:10px;
            }
            &:hover{
                background-color: #a6c76c;
                border-color: #a6c76c;
            }
        }
    }
`
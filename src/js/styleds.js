import styled from "styled-components";
import styledComponents from "styled-components";

export const Product = styled.div`
background: #fff;
border-radius: 15px;
display: grid;
width: 100%;
grid-template-columns: 1fr 3fr 1fr 1fr 1fr .5fr;
grid-template-rows: 1fr;
align-items: center;
justify-content: space-between;
gap: 0px 0px;
grid-template-areas: ". . . . . .";
height: 120px;
            .image {
                border-radius: 15px 0 0 15px;
                width: 100%;
                height: 100%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width:550px) {
                    border-radius: 15px 15px 0 0;
                   }
            }
                img 
                   { height: 100%;
                    object-position: center;
                    object-fit: cover;
                    width: 100%;}
            .name 
                {white-space: nowrap;
                margin-left: 20px;
                width: 10%;
                flex: .4;
                font-size: 1.1rem;}
            .category,.date;
               { color: #49494979;}
            
            .state 
               { width: fit-content;
                border-radius: 50px;
                color: white;
                text-transform: uppercase;
                white-space: nowrap;
                padding: 5px 10px;
                background-color: ${(props) => props.stateColor};
}
            input
              {  
                
                  width: 25px;
                height: 25px;
                border: 1px solid #9999;
                border-radius: 50px !important;}

@media (max-width: 1030px) {
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr .3fr;
}

@media (max-width:1000px) {
    position: relative;
    margin: 0 auto;
    flex: .4;
    width: 100%;
    flex-grow: 1;
    height: fit-content;
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    .image {
        width: 100%;
        height: 250px;

    }
    .name {
        text-align: center;
        width: fit-content;
        margin-left: 0;
    }

    input {
        position: absolute;
        top:0;
        left: 0;
    }
    .state {
        width:100%;
        text-align: center;
        border-radius: 50px 50px 15px 15px;
    }
}
`;

export const ProductContainer = styled.div`
width: 100%;
display: flex;
gap: 10px !important;
flex-wrap: wrap;
background-color: #e2e2e23f;
box-shadow: inset 0 1em 3em rgba(0,0,0,0.1);
flex-direction: column;
padding: 20px;

@media (max-width:1000px) {
    flex-direction:row;
}

@media (max-width:550px) {
 flex-direction: column;
}
`;

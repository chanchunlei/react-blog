import styled from 'styled-components';
export const ClassifyWrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;
    background: #fff; 
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    
    div {
        width: 300px;
        margin: 40px auto;
        text-align: center;
        img {
            width: 200px;
            height: 200px;
        }
        p {
            line-height: 40px;
            font-size: 20px;
            text-decoration: underline;
        }
    }
    @media screen and (max-width: 599px){
        div {
            width: 200px;
            img {
                width: 150px;
                height: 150px;
            }
            p {
                font-size: 16px;
            }
        }
    }
`;
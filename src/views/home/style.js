import styled from 'styled-components';
export const HomeWrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;
    background: #fff;
`;
export const HomeList = styled.div`
    width: 100%;
    position: relative;
    min-height: 200px;
    margin: 0 auto;
    padding: 40px 0;
    padding-right: 220px;
    box-sizing: border-box;
    @media screen and (max-width: 1300px){
        max-width: 750px;
    }
    @media screen and (max-width: 700px){
        padding-right: 0;
    }
`;
export const ListWrapper = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    h2 {
        font-size: 26px;
        color: #555;
        word-break: break-word;
    }
    .tag {
        margin-top: 3px;
        font-size: 12px;
        line-height: 2;
        color: #999;
        .post-meta-divider{
            padding: 0 0.5em;
        }
    }
    .description {
        font-size: 16px;
        line-height: 2;
        color: #555;
    }
    .readAll {
        font-size: 14px;
        background: #03a9f4;
        color: #fff;
        width: 110px;
        text-align: center;
        line-height: 2;
        margin: 10px 0;
    }
`;
export const ListImg = styled.div`
   position: absolute;
   top: 0; 
   bottom: 0;
   margin: auto 0;
   right: 0;
   width: 200px;
   height: 200px;
   background: gold;
   img {
       width: 100%;
       height: 100%;
   }
   @media screen and (max-width: 700px){
       display: none;
   }
`;
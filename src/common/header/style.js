import styled from 'styled-components';
export const HeaderWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    line-height: 2;
`;
export const HeaderConent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    &::after{
        content:"";
        display:block;
        clear:both;
    }
    @media screen and (max-width: 1000px) {
       padding: 0 15px;
    }
`;
export const HeaderImg = styled.div`
    float: left;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 5px 0;
    @media screen and (max-width: 700px) {
       height: 50px;
       width: 50px;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
export const HeaderNav = styled.div`
    float: right;
    @media screen and (max-width: 700px) {
        height: 60px;
        line-height: 57px;
        button {
            vertical-align: middle;
            background: #fff;
            border: none;
            outline: none;
            line-height: 2;
        }
    }
    @media screen and (min-width: 700px){
        display: none;
    }
`;
export const Headernavigation = styled.ul`
   background: #fff;
   margin: 0;
   li { cursor: pointer; }
   @media screen and (max-width: 699px) {
       &.listNav-enter {
           transition: all 200ms ease-out;
       }
       &.listNav-enter-active {
           transform: translateY(0px);
       }
       &.listNav-exit {
           transition: all 200ms ease-in;
       }
       &.listNav-exit-active {
           transform: translateY(-420px);
       }
       &.seeIt{
           top: 61px;
       }
       &.dispIt{
           top: -420px;
       }
       width: 100%;
       line-height: 60px;
       text-align: center;
       position: absolute;
       left: 0;
       z-index: 999;
       li {
           color: #666;
           padding: 0 15px;
           font-size: 14px;
           button {
               outline: none;
               border: 0px;
               background: #fff;
               cursor: pointer;
               line-height: 2;
           }
           .signIn {
               color: #1890ff;
           }
           .signUp {
               color: #f5222d;
           }
       }
    }
   @media screen and (min-width: 700px){
       height: 70px;
       width: 80%;
       float: right;
       line-height: 70px;
       text-align: right;
           li {
               display: inline-block;
               vertical-align: top;
               color: #666;
               padding: 0 15px;
               font-size: 14px;
               button {
                   padding: 5px 13px;
                   outline: none;
                   border-radius: 5px;
                   border: 1px solid #fff;
                   cursor: pointer;
                   line-height: 1;
               }
               .signIn {
                   color: #1890ff;
                   background-color: transparent;
                   border-color: #1890ff;
               }
               .signUp {
                   color: #f5222d;
                   background-color: transparent;
                   border-color: #f5222d;
               }
           }
       }
    }
`;
export const Modelblock = styled.div`
    position: fixed;
    top: 61px;
    left: 0;
    width: 100%;
    height: calc(100% - 61px);
    background: rgba(0,0,0,.3);
    z-index: 900;
    display: none;
    &.show{
        display: block;
    }
    &.disappear{
        display: none;
    }
    @media screen and (min-width: 700px){
        display: none !important;
    }
`;
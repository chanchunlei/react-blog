import styled from 'styled-components';
export const Sidebarwapper = styled.div`
    @media screen and (max-width: 1300px) {
        display: none;
    }
    width: 320px;
    height: 100%;
    background: #F0F2F5;
    position: fixed;
    top: 0;
    right: -320px;
    border-left: 1px solid #cac5c5a6;
    display: block;
    &.show {
        right: 0px;
        transition: all 0.3s;
    }
    &.hide {
        right: -320px;
        transition: all 0.3s;
    }
    .title {
        width: 100%;
        line-height: 50px;
        font-size: 16px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #ada7a7a6;
        span {
            margin: 0 5px;
        }
        display: none;
    }
    .msgBox {
        margin-top: 20px;
        text-align: center;
        img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
        }
        p {
            margin: 10px 0;
        }
        a {
            margin: 0 5px;
        }
    }
`;
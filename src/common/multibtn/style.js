import styled from 'styled-components';
export const Btnwapper = styled.div`
    @media screen and (max-width: 1300px) {
        display: none;
    }
    position: fixed;
    bottom: 80px;
    right: 80px;
    button {
        background: #F0F2F5;
        outline: none;
        border: 1px solid #ccc;
        font-size: 18px;
        width: 35px;
        height: 35px;
        text-align: center;
        cursor: pointer;
    }
    .Up {
        width: 35px;
        height: 35px;
        position: relative;
        right: 0px;
        bottom: 0px;
        margin-top: 3px;
        line-height: 35px;
        border-radius: 4px;
        background-color: #1088e9;
        color: #fff;
        text-align: center;
        font-size: 18px;
    }
`;
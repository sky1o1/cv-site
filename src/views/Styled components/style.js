import styled from 'styled-components';

export const TimeLine = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-right: 20px;
    margin-left: 50px;
    // &:hover{
    //     border: 1px solid grey;
    //     border-radius: 20px;
    // }
    // &:active{
    //     border: 1px solid grey;
    //     border-radius: 20px;
    // }
    &:before{
        content: "";
        position: absolute;
        width: 1px;
        top: 0;
        bottom: 0;
        background-color: #ececec;
    }
    &.li {
        margin-bottom: 35px;
        margin-left: 10%;
    }
    &.li > :last-child {
        margin-bottom: 0;
    }
    `;

    export const Content = styled.div`
    padding: 0 70px;
    position: relative;
    `;

    
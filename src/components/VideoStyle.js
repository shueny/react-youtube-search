import styled from 'styled-components';

export const VideoListsWrapper = styled.div `
    max-width: 1200px;
    background: white;    
    margin: auto;
`;


export const VideoItemWrapper = styled.ul `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
`;


export const VideoItem = styled.li `
    width: 33%;
    display: inline-flex;
    justify-content: flex-start;
    list-style: none;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;

    @media screen and (max-width: 992px) {
        width: 50%;
    }
`;
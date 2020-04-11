import styled from 'styled-components';

export const VideoListsWrapper = styled.div `
    max-width: 1200px;
    background: white;    
    margin: auto;
`;


export const VideoItemWrapper = styled.ul `
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
`;


export const VideoItem = styled.li `
    width: 30%;
    display: inline-flex;
    justify-content: space-between;
    list-style: none;
`;
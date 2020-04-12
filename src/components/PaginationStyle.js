import styled from 'styled-components';

export const PaginationWrapper = styled.div `
  width:100%;
  max-width:1000px;
  margin: auto;

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
  }
  li {
    width: 30px;
    height: 30px;
    display: inline-flex;
    background: #ff789a;
    margin: 0 4px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 12px;

    &.active {
      background: #b83556;
    }

    a {
      width: 100%;
      display: block;
      line-height: 30px;
      color: white;
    }
  }
`;
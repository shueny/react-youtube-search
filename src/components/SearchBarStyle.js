import styled from 'styled-components';

export const SearchWrapper = styled.div `
        margin: 50px 0 35px;
        text-align: center;
        display: inline-flex;
        width: 100%;
        justify-content: center;
        cursor: initial;

        .searchform {
            display: inline-flex;
            position: relative;
            left: 0;
            right: 0;

            input {
                outline: medium none;
            }

            input[type="search"] {
                background-color: transparent;
                border: medium none;
                border-width: 0 0 1px 0;
                border-style: solid;
                border-color: #17202A;
                border-radius: 0;
                box-sizing: content-box;
                color: #424949;
                cursor: pointer;
                font-family: inherit;
                font-size: 100%;
                margin-bottom: 0;
                padding: 3px 0;
                transition: all 0.5s ease 0s;
                max-width: 300px;
                width: calc(100% - 15px);
                -webkit-appearance: none;
                -moz-appearance: none;

                &::-webkit-search-decoration {
                    -webkit-appearance: none;
                }

                &::-ms-clear {
                    display: none;
                    width: 0;
                    height: 0;
                }

                &::-ms-reveal {
                    display: none;
                    width: 0;
                    height: 0;
                }

                &::-webkit-search-decoration,
                &::-webkit-search-cancel-button,
                &::-webkit-search-results-button,
                &::-webkit-search-results-decoration {
                    display: none;
                }

                &:focus {
                    background-color: transparent;
                    color: #424949;
                    cursor: auto;
                    padding: 3px 0;
                }
            }

            &:hover input[type="search"] {
                background-color: transparent;
                color: #424949;
                cursor: auto;
                padding: 3px 0;
            }
        }

        button[type="submit"] {
            background-color: rgba(0, 0, 0, 0);
            border: medium none;
            color: #424949;
            height: 30px;
            line-height: 1;
            float: right;
            font-size: 1em;
            pointer-events: none;
            width: auto;
            z-index: 1000000000;
        }

        .fa-search {
            padding-left: 0;
            padding-right: 0;
        }
`;
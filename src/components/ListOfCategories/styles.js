import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    padding: 15px 0;
    ${props => props.fixed && css`
      {
        background: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 15px 10px;
        position: fixed;
        right: 0;
        top: 0;
        transform: scale(1);
        z-index: 1;
      }
    `}
`

export const Item = styled.li`
    padding: 0 8px;
    list-style: none;
`

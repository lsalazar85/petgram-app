import styled from 'styled-components'

export const ListPhotos = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 0 50px 0;
`

export const ItemsPhotos = styled.li`
    padding: 0 8px;
    list-style: none;
    margin-bottom: 16px;
    &:last-child {
        margin-bottom: 0px;
    }
`

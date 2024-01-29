/* Write your CSS here */
import styled from 'styled-components'

export const MovieItemContainer = styled.div``

export const Thumbnail = styled.img`
  width: 215px;
  height: 150px;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    width: 250px;
    height: 180px;
  }
`
export const ModelContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  justify-self: flex-start;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  width: 28px;
  height: 28px;
  cursor: pointer;
  outline: none;
`

export const MoviePlayerContainer = styled.div`
  padding: 15px;
  border-radius: 10px;
  border-radius: 10px;
`

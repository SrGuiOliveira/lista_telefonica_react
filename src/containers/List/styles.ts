import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled.img`
  width: 50px;
  height: 50px;
`
export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  padding: 30px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`
export const SearchBar = styled.input`
  width: 100%;
  padding: 4px;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;

  &::placeholder {
    text-align: center;
  }
`

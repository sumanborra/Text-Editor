import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color:#25262c;
    padding: 50px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CardContainer = styled.div`
        background-color: #1b1c22;
        padding: 30px;
        display: flex;

`
export const ImageContainer = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Heading = styled.h1`
    font-family: "Roboto";
    font-size: 38px;
    color:#f8fafc;
    
`
export const Image = styled.img`
    height: 500px;

`

export const TextArea = styled.textarea`
  background-color:#25262c;
  color: #f1f5f9;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
   outline: none;
   border: none
   
   
    
`
export const ButtonsContainer = styled.ul`
    background-color:#25262c;
    padding: 10px;
    display: flex;
    align-items : center;

`
export const ListItem = styled.li``
export const TextareaContainer = styled.div`
   background-color:#25262c;
   
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    height:600px;
`
export const ButtonCustom = styled.button`
    background-color: transparent;
    border: none;
    margin: 5px;
    color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
    cursor: pointer;
`
export const ButtonItalic = styled(ButtonCustom)`
    color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`
export const ButtonUnderline = styled(ButtonCustom)`
    color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`
export const HarizontalLine = styled.hr`
    width: 100%;
    color: #cbd5e1;
`

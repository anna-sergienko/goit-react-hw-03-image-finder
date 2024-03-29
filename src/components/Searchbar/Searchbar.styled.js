import styled from 'styled-components';

export const FormHeader = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 1100;
display: flex;
justify-content: center;
align-items: center;
min-height: 64px;
padding-right: 24px;
padding-left: 24px;
padding-top: 12px;
padding-bottom: 12px;
color: #fff;
background-color: #E6E6FA;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchForm = styled.form`
display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #E6E6FA;
  overflow: hidden;
`


export const SearchFormButton = styled.button`
display: inline-block;
width: 80px;
height: 35px;
border: 0;
border-radius: 3px;
background-color: #E6E6FA;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
font-family: sans-serif;
font-size: 20px;
color: #000;

&:hover{
  opacity: 1;
}
`

export const FormInput = styled.input`
display: inline-block;
width: 100%;
height: 35px;
font: sans-serif;
font-size: 20px;
border: none;
border-radius: 3px;
outline: none;
padding-left: 4px;
padding-right: 4px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

&::placeholder{
  font-size: 18px;
}
`


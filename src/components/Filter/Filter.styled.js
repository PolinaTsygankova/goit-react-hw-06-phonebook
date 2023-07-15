import styled from 'styled-components';

export const Title = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-family: 'Raleway', sans-serif;
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.5em;
  padding-bottom: 15px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 55px;
    background-color: rgb(186, 0, 0);
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 1px;
    width: 100%;
    max-width: 255px;
    background-color: #333;
  }
`;

export const Label = styled.label`
  position: relative;
  font-size: 14px;
  border-top: 10px solid transparent;
  margin-bottom: 25px;
  display: inline-block;
  --field-padding: 12px;
  display: block;

  & input {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f2f2f2;
    padding: var(--field-padding);
    border-radius: 3px;
    width: 250px;
    outline: none;
    font-size: 14px;
  }

  & input.dirty + .placeholder,
  & input:focus + .placeholder,
  & input:not(:placeholder-shown) + .placeholder {
    top: -10px;
    font-size: 10px;
    color: rgb(184, 0, 0);
  }

  & input {
    border-radius: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: linear-gradient(90deg, rgb(143, 0, 0), rgb(143, 0, 0)) center
        bottom/0 0.15em no-repeat,
      linear-gradient(90deg, #ccc, #ccc) left bottom/100% 0.15em no-repeat,
      linear-gradient(90deg, #fafafa, #fafafa) left bottom/100% no-repeat;
    transition: background-size 0.3s ease;
  }

  & input.dirty,
  & input:not(:placeholder-shown),
  & input:focus {
    background-size: 100% 0.15em, 100% 0.1em, 100%;
  }
`;

import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  font-size: 14px;
  border-top: 10px solid transparent;
  margin-bottom: 30px;
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

  & span {
    position: absolute;
    left: var(--field-padding);
    width: calc(100% - (var(--field-padding) * 2));
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    top: 15px;
    line-height: 100%;
    transform: translateY(-50%);
    color: #aaa;
    transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  }

  & input.dirty + .placeholder,
  & input:focus + .placeholder,
  & input:not(:placeholder-shown) + .placeholder {
    top: -10px;
    font-size: 10px;
    color: #222;
  }

  & input {
    border-radius: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: linear-gradient(90deg, #222, #222) center bottom/0 0.15em
        no-repeat,
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

export const Text = styled.span`
  position: relative;
  padding: 0;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.5em;
  padding-bottom: 15px;
  position: relative;
`;

export const Submitbtn = styled.button`
  margin-top: 45px;
  margin-bottom: 5px;
  margin-left: 27%;
  width: 200px;
  justify-content: center;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: 1px 5px 34px -5px rgba(184, 0, 0, 0.81);
  -webkit-box-shadow: 1px 5px 34px -5px rgba(184, 0, 0, 0.81);
  -moz-box-shadow: 1px 5px 34px -5px rgba(184, 0, 0, 0.81);
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;

  &:hover {
    background: #f6f9fe;
    color: rgb(184, 0, 0);
  }

  &:active {
    /* box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
      0 8px 12px 6px rgb(60 64 67 / 15%); */

    box-shadow: rgb(184, 0, 0);
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #4285f4;
  }

  &:not(:disabled) {
    box-shadow: rgb(184, 0, 0);
  }

  &:not(:disabled):hover {
    box-shadow: 1px 5px 34px 8px rgba(184, 0, 0, 0.81);
    -webkit-box-shadow: 1px 5px 34px 8px rgba(184, 0, 0, 0.81);
    -moz-box-shadow: 1px 5px 34px 8px rgba(184, 0, 0, 0.81);
  }

  &:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
      rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
  }

  &:disabled {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
`;

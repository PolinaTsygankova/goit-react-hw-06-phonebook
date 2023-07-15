import styled from 'styled-components';

export const MainTitle = styled.h1`
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  & {
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  &:before {
    width: 28px;
    height: 5px;
    display: block;
    content: '';
    position: absolute;
    bottom: 3px;
    left: 50%;
    margin-left: -14px;
    background-color: #b80000;
  }
  &:after {
    width: 100px;
    height: 1px;
    display: block;
    content: '';
    position: relative;
    margin-top: 25px;
    left: 50%;
    margin-left: -50px;
    background-color: #b80000;
  }
`;

export const MainDiv = styled.div`
  overflow-y: hidden;
  /* width: 100vw; */
  /* height: 100vh; */
  /* background: #eee; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContactTitle = styled.h2`
  /* font-family: Raleway, sans-serif; */
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 34px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  & {
    text-align: center;
    padding-bottom: 5px;
  }
`;

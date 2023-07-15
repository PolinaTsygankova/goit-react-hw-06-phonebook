import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 15px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  display: inline-block;
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: rgb(186, 0, 0);
  cursor: pointer;
  display: inline-block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const Text = styled.p`
  margin-right: 100px;
  display: inline-block;
  padding: 0px 0px 15px;
  margin: 0px;
  font-family: Raleway, sans-serif;
  color: rgb(8, 8, 8);
  transition: all 0.4s ease 0s;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.5em;
  position: relative;
`;

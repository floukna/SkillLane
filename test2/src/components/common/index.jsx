import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  font-size: 1.33em;
  height: 50px;
  font-family: 'NotoSerifThai';
  font-weight: 200;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  ${props => props.keep ? `
     background: #024825;
     color: white;
  ` : `
  color: #024825;
  background: #fff;
  `}
  border: 1px solid #024825;
  transition: 0.3s;
  &:hover {
    background: #024825;
    color: white;
  }
`

export const ButtonRadius = styled.button`
  border-radius: 20px;
  font-family: 'NotoSerifThai';
  font-size: 12px;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #fff;
  border: 1px solid #024825;
  transition: 0.3s;
  &:hover {
    background: #024825;
    color: white;
  }
`

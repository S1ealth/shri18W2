import React, { Component } from 'react';
import Logo from './Header-Logo.png';
import './Header-Logo.css';
export default function HeaderLogo(props: any) {
  return (
    <img className={props.className} src={Logo} alt='Лого' />
  )
}
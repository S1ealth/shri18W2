import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import HeaderNavigation from './-Navigation/Header-Navigation';
import HeaderLogo from './-Logo/Header-Logo';
import './Header.css';
const cnHeader = cn('Header');
export default function Header(props: any) {
  return (
    <header className={cnHeader()}>
      <HeaderLogo
        className={cnHeader('Logo')}
      />
      <HeaderNavigation
        className={cnHeader('Navigation')}
      />
    </header>
  );
}
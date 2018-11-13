import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import FooterNavigation from './Footer-Navigation/Footer-Navigation';
import './Footer.css';

const cnFooter = cn('Footer');
export default function Footer() {
  return(
    <footer className={cnFooter()}>
    <FooterNavigation
    className={cnFooter('Navigation')}
    />
    </footer>
  );
}
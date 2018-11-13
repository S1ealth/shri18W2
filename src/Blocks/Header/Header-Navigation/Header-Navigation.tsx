import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import Link from '../../Link/Link';
import './Header-Navigation.css';
export default function HeaderNavigation(props: any) {
  const links = [
    { name: 'События', url: '#', active: true },
    { name: 'Сводка', url: '#', active: false },
    { name: 'Устройства', url: '#', active: false },
    { name: 'Сценарии', url: '#', active: false },
  ];
  const cnLink = cn(props.className);
  const urls = links.map((link) => {
    const { name, url, active } = link;
    return <Link
      className={props.className}
      href={url}
      text={name}
      active={active}
    />
  })
  return (
    <nav className={cnLink()}>
    {urls}
    </nav>
  )
}

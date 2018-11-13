import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import Link from '../../Link/Link';
import './Footer-Navigation.css';
export default function FooterNavigation(props: any) {
  const links = [
    { name: 'Помощь', url: '#', active: false },
    { name: 'Обратная связь', url: '#', active: false },
    { name: 'Разработчикам', url: '#', active: false },
    { name: 'Условия использования', url: '#', active: false },
    { name: '© 2001–2017  ООО «Яндекс»', url: '#', active: false },
  ];
  const cnLink = cn(props.className);
  const urls = links.map((link) => {
    const { name, url, active } = link;
    return <Link
      className={cnLink}
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

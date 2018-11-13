import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Link.css';
import './_active/active.css';
const cnLink = cn('Link');
export default function Link(props: any) {
  return (
    <a
      className={props.className +' ' + cnLink({ active:props.active })}
      href={props.href}>
      {props.text}
    </a>
  )
}
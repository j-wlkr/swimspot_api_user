import React from 'react';

export default function SpotItem(props) {
  return (
    <li key={props.item.id}>{props.item.description}</li>
  )
}

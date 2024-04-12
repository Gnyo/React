import React from 'react';
import './style.css';

export default function TableRow(props) {
  return (
    <tr>
      <th><strong>{props.title}</strong></th>
      <td>{props.content}</td>
    </tr>
  );
}

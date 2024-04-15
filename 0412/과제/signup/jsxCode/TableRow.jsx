import React from 'react';
import './App.css';

export default function TableRow(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.name}:</label>
            <input
                type={props.type}
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={props.onChange}
                required
            />
        </div>
    );
}
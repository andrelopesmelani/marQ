import React, { useState } from 'react';
import './styles.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const Input = ({ label, error, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="inputContainer">
      <label htmlFor={rest.id}>{label}</label>
      <input
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`input ${error ? 'error' : ''} ${isFocused ? 'focused' : ''}`}
      />
      {error && (
        <span className="errorMessage">O campo {label} é obrigatório</span>
      )}
    </div>
  );
};

export default Input;
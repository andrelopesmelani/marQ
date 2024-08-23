import React from 'react';
import './styles.scss'

interface SelectProps {
  value: string;
  onChange: (newValue: any) => void;
  children: React.ReactNode;
  className ?: string;
}

const Select = ({ value, onChange, children, className }: SelectProps) => {

  return (
    <select className={className} value={value} onChange={(e) => onChange(e.target.value)}>
      {children}
    </select>
  );
};

export default Select;
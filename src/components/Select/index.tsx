import React, { SelectHTMLAttributes } from 'react'
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="-1" id={name} {...rest}>
        <option selected disabled hidden>Selecione uma opção</option>
        {options.map(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select;
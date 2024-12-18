import React from 'react';
import { useNumberContext } from '../store/numberContext';

// Input Component
const NumberInput: React.FC = () => {
  const { setPositive, setNegative } = useNumberContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const number = parseInt(value);
    if (isNaN(number)) return;

    if (number < 0) {
      setNegative();
    } else {
      const nextNumbers = Array.from(
        { length: 3 },
        (_, i) => number + (i + 1) * 2
      );
      setPositive(nextNumbers);
    }
  };

  return (
    <input type="number" onChange={handleChange} placeholder="Enter a number" />
  );
};

export default NumberInput;

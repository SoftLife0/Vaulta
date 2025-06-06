import React, { useRef } from 'react';

const OTPInput = ({ code, setCode, length }) => {
  const inputsRef = useRef([]);

  const handleChange = (e, i) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      const newCode = code.split('');
      newCode[i] = value;
      setCode(newCode.join('').padEnd(length, ''));

      if (value && i < length - 1) {
        inputsRef.current[i + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === 'Backspace') {
      const newCode = code.split('');
      if (code[i]) {
        newCode[i] = '';
      } else if (i > 0) {
        newCode[i - 1] = '';
        inputsRef.current[i - 1]?.focus();
      }
      setCode(newCode.join('').padEnd(length, ''));
    }
  };

  return (
    <div className="mb-3 d-flex justify-center align-center gap-3">
      {[...Array(length)].map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          className="input-field text-center"
          style={{
            width: '60px',
            height: '60px',
            border: code[i] ? '2px solid #FFA006' : '2px solid white',
            fontSize: '30px',
            fontWeight: 600,
          }}
          value={code[i] || ''}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          maxLength="1"
          type="text"
          required
        />
      ))}
    </div>
  );
};

export default OTPInput;

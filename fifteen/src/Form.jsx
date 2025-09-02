import React, { useState } from 'react';

export default function Form() {
  const [inpt1, setInpt1] = useState('');
  const [inpt2, setInpt2] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5174/api/submit', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inpt1: inpt1, inpt2: inpt2 }),
      });

      if (response.ok) {
        console.log('Данные успешно отправлены!');
        alert('Данные успешно отправлены!'); 
        setInpt1('');
        setInpt2('');
      } else {
        console.error('Ошибка при отправке данных:', response.status);
        alert('Ошибка при отправке данных!');
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('Ошибка сети!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="inpt1"
        placeholder="Введите имя..."
        value={inpt1}
        onChange={(e) => setInpt1(e.target.value)}
      />
      <input
        id="inpt2"
        placeholder="Введите фамилию..."
        value={inpt2}
        onChange={(e) => setInpt2(e.target.value)}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

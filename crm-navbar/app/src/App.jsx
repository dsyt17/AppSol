import React, { useState } from "react";
import Navbar from "./Navbar";

// имитайия стейта для демонстрации уведомлений
const notes = [
  { for: "orders", value: 0 },
  { for: "chat", value: 0 },
  { for: "feedback", value: 0 },
];

const App = () => {
  const [noteWasAdded, setNoteWasAdded] = useState(0);

  return (
    <div className="app">
      <Navbar notes={notes} />

      {/* Кнопки просто для теста уведомлений! */}
      <div className="buttons">
        <h1>Чтобы свернуть нажми на логотип!</h1>
        <button
          onClick={() => {
            notes[0].value = 1;
            setNoteWasAdded(noteWasAdded + 1);
          }}
        >
          Добавить уведомление заказ
        </button>
        <button
          onClick={() => {
            notes[1].value = 1;
            setNoteWasAdded(noteWasAdded + 1);
          }}
        >
          Добавить уведомление чат
        </button>
        <button
          onClick={() => {
            notes[2].value = 1;
            setNoteWasAdded(noteWasAdded + 1);
          }}
        >
          Добавить уведомление обратную сзязь
        </button>
      </div>
    </div>
  );
};

export default App;

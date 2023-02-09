import React, { useState } from "react";
import {
  Cashback,
  Chat,
  ClientReturn,
  Clients,
  Debts,
  Drivers,
  Feedback,
  Logout,
  MainLogo,
  OnlinePay,
  Orders,
  PathLists,
} from "./MenuIcons";

// хок для показа уведомлений на некоторых компонентах
const withNote = (Component, note) => {
  return <Component note={note} />;
};

const Navbar = ({ notes }) => {
  const navbarItems = [
    { name: "orders", text: "Заказы", icon: Orders },
    { name: "pathLists", text: "Маршрутные листы", icon: PathLists },
    { name: "clients", text: "Клиенты", icon: Clients },
    { name: "drivers", text: "Водители", icon: Drivers },
    { name: "chat", text: "Чат", icon: Chat },
    { name: "feedback", text: "Обратная связь", icon: Feedback },
    { name: "onlinePay", text: "Онлайн-оплата", icon: OnlinePay },
    { name: "cashback", text: "Кэшбек", icon: Cashback },
    { name: "debts", text: "Учет долгов по таре", icon: Debts },
    { name: "clientReturn", text: "Возврат клиентов", icon: ClientReturn },
  ];

  const [fullNavbar, setFullNavbar] = useState(true);
  const [activeItem, setActiveItem] = useState("orders");
  const toggleNavbar = () => setFullNavbar(!fullNavbar);

  return (
    <div className={`sidebar ${!fullNavbar && "sidebar_small"}`}>
      <div>
        <div className="top_navbar">
          <div className="logo" onClick={toggleNavbar}>
            <MainLogo />
          </div>
          {fullNavbar && <div className="title">Aqua Delivery</div>}
        </div>

        {navbarItems.map((item) => (
          <div
            key={item.name}
            className={`menu_item ${activeItem === item.name && "active"}`}
            onClick={() => setActiveItem(item.name)}
          >
            <div className="icon">
              {/* проверяем наличие уведомлений у пунктов */}
              {notes.some((note) => note.for === item.name && note.value) ? (
                // если есть, то через хок передаем количество
                withNote(item.icon, 1)
              ) : (
                <item.icon />
              )}
            </div>
            {fullNavbar && <div className="item_text">{item.text}</div>}
          </div>
        ))}
      </div>

      {/* Нижняя кнопка (но зачем там надпись заказы?)*/}
      <div>
        <div
          className="menu_item_bottom"
          onClick={() => {
            console.log("logout");
          }}
        >
          <div className="icon">
            <Logout />
          </div>
          {fullNavbar && <div className="item_text">Заказы</div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

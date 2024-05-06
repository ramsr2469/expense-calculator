import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: number) => void;
  selectedIndex: number;
}

function ListGroup({ items, heading, onSelectedItem, selectedIndex }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length &&
          items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => onSelectedItem(index)}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ListGroup;

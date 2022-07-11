import classNames from "classnames";
import { useMemo } from "react";

const rotations = [0, 1, 2, 3, 6];

export const TodoItem = ({ id, title, description, important, onDelete }) => {
  const rotation = useMemo(
    () => rotations[Math.floor(Math.random() * rotations.length)],
    []
  );
  return (
    <li
      className={classNames(
        "text-black p-8 w-40 h-40 shadow-sm text-ellipsis overflow-clip relative",
        `rotate-${rotation}`,
        {
          "bg-red-500": important,
          "bg-yellow-100": !important,
        }
      )}
    >
      <button
        className="absolute top-2 right-2 font-bold"
        onClick={() => onDelete(id)}
      >
        X
      </button>
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
    </li>
  );
};

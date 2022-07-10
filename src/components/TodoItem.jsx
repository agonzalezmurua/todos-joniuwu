import classNames from "classnames";

export const TodoItem = ({ id, title, description, important, onDelete }) => {
  return (
    <li
      className={classNames(
        "text-black p-8 w-40 h-40 shadow-md rotate-6 text-ellipsis overflow-clip",
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
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </li>
  );
};

export const TodoList = ({ children }) => {
  return (
    <ul className="m-8 inline-grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
};

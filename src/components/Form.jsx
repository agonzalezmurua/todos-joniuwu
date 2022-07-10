export function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const { title, description, important } = target;

    console.log(important.checked);

    onSubmit({
      title: title.value,
      description: description.value,
      important: important.checked,
    });

    target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black flex items-center gap-2 p-4"
    >
      <input
        className="bg-white p-2 rounded-md focus:outline-2"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="bg-white p-2 rounded-md focus:outline-2"
        type="text"
        name="description"
        placeholder="Description"
        required
      />
      <span>
        <input type="checkbox" name="important" placeholder="Important" />
        <label htmlFor="important">Important</label>
      </span>
      <button
        className="p-2 bg-lime-200 rounded-md active:bg-lime-400"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}

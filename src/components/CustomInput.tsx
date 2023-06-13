interface Props {
  type: string;
  placeholder: string;
  name: string;
}

function CustomInput({ type, placeholder, name }: Props) {
  return (
    <label htmlFor={name}>
      <input
        className="py-2 px-4 bg-gray-100 text-gray-800 w-full mb-3 text-sm outline-none font-medium"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export default CustomInput;

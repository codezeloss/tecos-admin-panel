interface Props {
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
}

function CustomInput({ label, type, placeholder, name }: Props) {
  return (
    <div>
      <label className="text-sm text-black font-semibold">{label}</label>
      <input
        className="py-2 px-4 bg-gray-100 text-gray-800 w-full text-sm outline-none font-medium mt-1"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;

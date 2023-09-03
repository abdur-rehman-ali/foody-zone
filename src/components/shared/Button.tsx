interface ButtonProps {
  text: String;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-red-500 text-white py-1.5 px-3 rounded-lg mx-1.5">
      {text}
    </button>
  );
};

export default Button;

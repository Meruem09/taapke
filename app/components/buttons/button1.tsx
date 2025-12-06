type MyButtonProps = {
  btn_name: string;
  onClick?: () => void;
};


export default function Button1({ btn_name, onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border text-4xl bg-orange-600 px-8 py-5 text-white cursor-pointer"
    >
      {btn_name}
    </button>
  );
}

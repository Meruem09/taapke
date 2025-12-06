type MyButtonProps = {
  btn_name: string;
  onClick?: () => void;
};


export default function Button2({ btn_name, onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="box-border border border-black text-4xl px-8 py-5 text-orange-600 cursor-pointer"
    >
      {btn_name}
    </button>
  );
}

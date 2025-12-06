import Button1 from "./components/buttons/button1";
import Button2 from "./components/buttons/button2";


export default function Home() {
  return (
    
    <div className="w-full h-screen flex flex-col justify-center items-center ">

      <div className="font-myfont bold flex flex-col items-center text-[80px] leading-tight text-gray-700">
        <div>F*ck College Assignments</div>

        <div className="flex items-center -top-2">
          <div>Write Assignments in</div>

          {/* Highlight Box */}
          <div className="relative w-[340px] h-[120px]">
          {/* Main blue box */}
          <div className="absolute inset-[10px] bg-[#3B82F6] flex items-center justify-center text-white">
            minutes
          </div>

          {/* Top-right square */}
          <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] -top-[0px] -right-[0px] z-20" />

          {/* Bottom-left square */}
          <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] -bottom-[0px] -left-[0px] z-20" />
        </div>

        </div>
      </div>
      <span className=" font-inria-serif text-4xl text-gray-400">why write assignments when ai can do it</span>
      <div className=" flex mt-4 gap-4">
        <Button1 btn_name="Get Started"/>
        <Button2 btn_name="See how it works"/>
      </div>
    </div>
  );
}

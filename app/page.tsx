export default function Home() {
  return (
    
    <div className="w-full h-screen flex justify-center">

      <div className="flex flex-col items-center text-[80px] font-bold leading-tight mt-64">
        <div>F*ck College Assignments</div>

        <div className="flex items-center">
          <div>Write Assignments in</div>

          {/* Highlight Box */}
          <div className="relative w-[340px] h-[120px]">
          {/* Main blue box */}
          <div className="absolute inset-[10px] bg-[#3B82F6] flex items-center justify-center text-white text-[80px]">
            minutes
          </div>

          {/* Top-right square */}
          <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] -top-[0px] -right-[0px] z-20" />

          {/* Bottom-left square */}
          <div className="absolute w-[14px] h-[14px] bg-[#3B82F6] -bottom-[0px] -left-[0px] z-20" />
        </div>

        </div>
      </div>
    </div>
  );
}

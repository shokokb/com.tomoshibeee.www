import CandleCanvas from './CandleCanvas';

function HeroSection() {
  return (
    <section className="relative w-full h-[400px] bg-gray-900 flex items-center justify-center text-white">
      {/* 背景キャンドル */}
      <CandleCanvas />

      {/* 中央テキストオーバーレイ */}
      <div className="absolute text-center px-4">
        {/* <h1 className="text-4xl font-bold mb-2">Tomoshibeee.com</h1> */}
        {/* <p className="text-lg">Think still; Light faster</p> */}
      </div>
    </section>
  );
}

export default HeroSection;


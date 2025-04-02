import BackGround_Lobby from "/Background_Lobby.png";

export default function Center() {
  return (
    <section
      id="home"
      className="w-full relative h-dvh flex bg-cover bg-center flex-col gap-10 text-white  justify-center items-center"
      style={{
        backgroundImage: `url(${BackGround_Lobby})`
      }}
    >
      <div className="w-full h-full absolute top-0 right-0 bg-[#0E0E0E70]" />

      <div className="flex relative text-white max-md:w-[90vw] font-bold flex-col max-w-[800px] justify-center items-center gap-2 text-center">
        <h1 className="text-3xl max-md:text-2xl">Bem-vindo</h1>
        <h1 className="text-5xl max-md:text-4xl">
          Desenvolvedor Front End && Engenheiro de Software
        </h1>
      </div>

      <button className="py-3 relative font-semibold border-red-900 border-2 px-8 rounded-4xl cursor-pointer transition-all duration-300 hover:bg-[#99101030] hover:scale-110">
        Contate Me
      </button>
    </section>
  );
}

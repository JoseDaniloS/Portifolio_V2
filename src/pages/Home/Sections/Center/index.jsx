import BackGround_Lobby from "/Background_Lobby.webp";

export default function Center() {
  return (
    <section
      id="home"
      className="w-full relative h-dvh flex bg-cover bg-center flex-col gap-10 text-white justify-center items-center"
      style={{
        backgroundImage: `url(${BackGround_Lobby})`
      }}
    >
      <div className="w-full h-full absolute top-0 right-0 bg-[#0E0E0E70]" aria-hidden="true" />

      <div className="flex relative text-[#999] max-md:w-[90vw] font-bold flex-col max-w-[800px] justify-center items-center gap-2 text-center">
        <h1 className="text-3xl max-md:text-2xl text-white">Bem-vindo</h1>
        <h2 className="text-5xl max-md:text-4xl">
          Desenvolvedor Front-End & CEO da Chronos - Web Soluções
        </h2>
      </div>

      <a href="#contact" className="py-3 relative font-semibold border-red-900 border-2 px-8 rounded-4xl cursor-pointer transition-all duration-300 hover:bg-[#99101030] hover:scale-110">
        Entre em contato
      </a>
    </section>
  );
}

import cmdPng from "../images/Repeating_Command_Block_JE4_BE2.png";

function Main() {
  return (
    <>
      <section className='pt-[80px] pb-[50px] md:ml-[50px] h-[100vh] flex'>
        <div className='md:pl-[50px] md:pr-[50px] pl-[30px] pr-[30px] grid md:grid-cols-2 flex-1/2 items-center'>
          <div>
            <h1 className='font-capital md:text-[40pt]/[45pt] text-[20pt]/[25pt] font-bold text-white mb-[30px] border-l-1 pl-[20px] md:pt-[50px] md:pb-[25px] pb-[10px] pt-[25px] max-w-[600px]'>
              HELLO!<br />
              I'M GUILHERME,<br />
              A <span className='drop-shadow-purple-neon text-cool-purple'>WEB DEVELOPER</span>.
            </h1>
            <p className='font-poppins text-quote w-fit md:text-[12pt] text-[8pt]'>~ I only need a computer. And maybe a mouse.</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src={cmdPng} alt="" className='md:w-[250px] md:h-[250px] md:mt-0 mt-[100px] w-[120px] h-[120px] drop-shadow-purple-neon animate-wigle' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
function Header() {
  return (
    <>
        <header className='h-15 w-full flex items-center justify-end fixed left-0 top-0 z-40 pr-[15px] gap-[15px]'>
            <a href="">
                <span className='bi bi-github text-quote text-[15pt] hover:text-white duration-[250ms]'></span>
            </a>
            <a href="https://discord.com/users/nerzgui">
                <span className='bi bi-discord text-quote text-[15pt] hover:text-white duration-[250ms]'></span>
            </a>
            <a href="">
                <span className='bi bi-instagram text-quote text-[15pt] hover:text-white duration-[250ms]'></span>
            </a>
            <button className="flex w-[25px] h-[25px] items-center justify-center bg-transparent cursor-pointer ml-[-2px]">
                <span className='bi bi-globe-americas text-quote text-[15pt] hover:text-white duration-[250ms]'>
                    <span className="bi bi-caret-down-fill absolute text-[8pt] ml-[1px]"></span>
                </span>
            </button>
        </header>
    </>
  )
}

export default Header
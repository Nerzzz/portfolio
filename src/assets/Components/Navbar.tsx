import LinkToolTip from "./LinkToolTip";
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  return (
    <>        
      <nav className='fixed h-[100vh] w-[50px] z-50 float-left pl-[15px] pt-[10px]'>
        <button className={`${isMenuOpen ? 'bi bi-x' : 'bi bi-list'} md:hidden block text-white text-[24pt] mb-[10px] cursor-pointer`} onClick={() => setMenuOpen(!isMenuOpen)} />

        <ul className={`md:grid md:gap-[25px] gap-[10px] md:text-[18pt] text-[12pt] ${isMenuOpen ? 'grid' : 'hidden'} w-fit p-[15px] pr-[35px] md:bg-transparent md:p-0 bg-gray-800 shadow-xl rounded `}>
          <li onClick={() => setMenuOpen(!isMenuOpen)}><LinkToolTip path="/" icon="bi bi-house-fill" title="Home" subtitle="Go to home page, duh." /></li>
          <li onClick={() => setMenuOpen(!isMenuOpen)}><LinkToolTip path="/Knowledge" icon="bi bi-book-fill" title="My Knowledge" subtitle="All my knowledge is here. Literaly"/></li>
          <li onClick={() => setMenuOpen(!isMenuOpen)}><LinkToolTip path="/Works" icon="bi bi-hammer" title="My Projects" subtitle="There have much cool things here."/></li>
          <li onClick={() => setMenuOpen(!isMenuOpen)}><LinkToolTip path="/About" icon="bi bi-person-arms-up" title="About Me" subtitle="Why not a page only for my 'persona'?."/></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
        <button className='fixed md:hidden flex z-50 float-left bg-white mt-[15px] ml-[15px] w-[25px] h-[25px] items-center justify-center rounded-[5px]'><span className='bi bi-list text-black text-[15pt] font-bold'></span></button>
        
        <nav className='fixed h-[100vh] w-[50px] z-50 float-left pl-[15px] pt-[10px] md:block hidden'>
            <ul className='grid gap-[25px] text-[18pt]'>
                <li><Link to="/" title="Home"><span className='bi bi-house-fill text-quote hover:text-white duration-[250ms]'></span></Link></li>
                <li><Link to="/Knowledge" title="technologies"><span className='bi bi-box text-quote hover:text-white duration-[250ms]'></span></Link></li>
                <li><Link to="/Works" title="My Works"><span className='bi bi-person-workspace text-quote hover:text-white duration-[250ms]'></span></Link></li>
                <li><Link to="/About" title="About Me"><span className='bi bi-person-arms-up text-quote hover:text-white duration-[250ms]'></span></Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
import { FaUserCircle, BiSearchAlt2 } from 'react-icons/fa';
import Link from 'next/link';

export default function Header(){
    return(
        <header className="bg-gray-700"> 
         
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
     
<div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
    <input type="text" className="input-text" placeholder="Search YMSI..." />
</div>
 <div className='shrink w-80 order-0 '>
    <a >YMSI</a>
</div>
<div className='w-96 oder-3 flex justify-center'>
<div className="flex gap-3">
    <Link href={"/"} className='signup-login'>Sign Up</Link>
    <Link href={"/"} className='signup-login'>Log In</Link>
    <Link href={"/"} className='icon-Header'><FaUserCircle /></Link>
</div>
</div>
        </div>
        </header>
    )
}
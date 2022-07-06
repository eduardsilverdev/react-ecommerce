import React, { useState } from 'react'
import logo from '../images/Logo.svg'
import {AiOutlineMenuUnfold,AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleToggleOpen = () => {
        setOpen(!open)
    }
  return (
    <header className='bg-[#1C2B35] w-full z-10 fixed flex justify-between items-center h-16 px-14'>

            {/* Logo section */}
            <div>
                <img src={logo} alt="" />
            </div>

            {/* Navigation section */}
            <ul className='hidden text-slate-200 font-medium md:flex space-x-6'>

                <li className='cursor-pointer hover:text-orange-400 duration-300'>Order</li>
                <li className='cursor-pointer hover:text-orange-400 duration-300'>Order Review</li>
                <li className='cursor-pointer hover:text-orange-400 duration-300'>Manage Inventory</li>
                <li className='cursor-pointer hover:text-orange-400 duration-300'>Login</li>
            </ul>

            {/* Icon section */}
            <div onClick={handleToggleOpen}className='text-slate-100 cursor-pointer md:hidden'>
            {
                (!open) ? <AiOutlineMenuUnfold size={25}/> : <AiOutlineClose size={25}/>
            }


            {/* Shown mobile icon */}
            <u className={(!open ? 'hidden' : 'absolute top-16 left-0 w-full bg-[#1C2B35] list-none px-10 no-underline text-2xl py-10 text-center')}>

                <li className='cursor-pointer hover:text-orange-400 duration-300 border-b py-2'>Order</li>

                <li className='cursor-pointer hover:text-orange-400 duration-300 border-b py-2'>Order Review</li>

                <li className='cursor-pointer hover:text-orange-400 duration-300 border-b py-2'>Manage Inventory</li>

                <li className='cursor-pointer hover:text-orange-400 duration-300 border-b py-2'>Login</li>
            </u>
            
            </div>
    </header>
  )
}

export default Header
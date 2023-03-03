import React from 'react'
// backdrop-blur-sm

const Header = () =>{
    
    return(
        <div className='w-full fixed z-10 bg-fixed'>
            <header className="flex py-5 px-10 my-5 mx-20 text-white rounded-full bg-white">
                <div className='logo text-xs'>
                    <h2 className='site-logo'>zfn games</h2>
                </div>
                <nav className='ml-auto'>
                    <ul className='flex gap-8 text-black items-center'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#itemgamas">Category</a>
                        </li>
                        <li>
                            <a href="#itemgamas">Contact</a>
                        </li>
                        <li>
                            <a href="#itemgamas">List Game</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export default Header
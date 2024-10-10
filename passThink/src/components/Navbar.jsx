import React from 'react'
const Navbar = () => {
    return(
        <nav className='bg-purple-200 flex justify-center item-center'>
            <div className="logo font-bold">PassThink</div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
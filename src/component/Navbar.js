import logo from '../img/logo.png'
import Button from './Button'
const Navbar = () => {
    return (
        <header className='header'>
            <div>
                <nav className='navbar'>
                    <img src={logo} className='logo' />
                    <ul className='list-group'>
                        <li className='list-item'><a href='#explore' className='list-link'>explore</a></li>
                        <li className='list-item'><a href='#community' className='list-link'>community</a></li>
                        <li className='list-item'><a href='#' className='list-link'>about us</a></li>
                        <li className='list-item'><a href='#' className='list-link'>featured arts</a></li>
                        <li className='list-item'><a href='#' className='list-link'>contact us</a></li>
                    </ul>
                    <Button text= 'sign up' color= "#e5145b" border= "transparent"/>
                </nav>
            </div>
        </header>
    )
}


export default Navbar

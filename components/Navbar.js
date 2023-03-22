import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import NavItem from './NavItems'

const MENU_LIST = [
  {
    text: 'Home',
    href: '/'
  },{
    text: 'About',
    href: '/about'
  },{
    text: 'Music',
    href: '/music'
  },{
    text: 'Services',
    href: '/services'
  },{
    text: 'Contact',
    href: '/contact'
  }
]

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div style={{backgroundColor: '#F0A04B'}}>
      <Container>
        <nav className='nav'>
          <Link href={"/"} legacyBehavior>
            <a onClick={() => setActiveIdx(0)}> 
              <span className='logo'>Odul</span>
            </a>
          </Link>

          <div onClick={()=> setNavActive(!navActive)} className='nav__menu-bar'>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => {
              return (
                <div onClick={()=> {
                  setActiveIdx(idx);
                  setNavActive(false);
                }} 
                  key={menu.text}>
                  <NavItem actrive={activeIdx === idx} {...menu}/>
                </div>
              )
            })}
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
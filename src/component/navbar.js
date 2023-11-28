import logo from '../img/ff.png'
import { Navbar } from 'flowbite-react';

function Navbarr(){
    return( 
      
      <Navbar fluid style={{ backgroundColor : '#1f2937', color : '#f3faf7', position: 'fixed', top: 0, width: '100%', zIndex: 1000   }}>
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Film Fusion</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/nowplaying" style={{ color : '#f9fafb' }}>Now Playing</Navbar.Link>
        <Navbar.Link href="/popular" style={{ color : '#f9fafb' }}>Popular </Navbar.Link>
        <Navbar.Link href="/toprated" style={{ color : '#f9fafb' }}>Top Rated</Navbar.Link>
        <Navbar.Link href="/upcoming" style={{ color : '#f9fafb' }}>Upcoming</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default Navbarr;
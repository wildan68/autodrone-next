import React from 'react'
import Image from 'next/image'
import styles from '../styles/header.module.css'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu: false,
            isMobile: false,
            screenWidth: null,
            search: false,
        }
    }
    async componentDidMount() {
        //Mengambil Data Layar
        await this.setState({
            screenWidth: window.innerWidth
        })
        if (this.state.screenWidth > 768) {
            this.setState({
                isMobile: false,
            })
        }
        else {
            this.setState({
                isMobile: true,
            })
        }
    }
    // Method
    toggleMenu = () => {
        if (this.state.navMenu) {
            this.setState({
                navMenu: false
            })
        }
        else {
            this.setState({
                navMenu: true
            })
        }
    }
    toggleSearch = () => {
        if (this.state.search) {
            this.setState({
                search: false,
            })
        }
        else {
            this.setState({
                search: true,
            })
        }
    }
    render() {

        return (
            <div className='fixed z-50 bg-black text-white left-0 right-0 h-[5em] flex items-center justify-center'>
                <div className={`flex items-center justify-center gap-28 ${styles.navMenu} w-full`}>
                    <div className='flex w-14 h-14 items-center justify-center md:flex-1'>
                        <img src={'img/logo.png'} className='w-[48px]'/>
                    </div> 
                    <div className={`flex relative gap-24 max-w-full h-auto text-gray ${
                        this.state.navMenu ? 'md:flex md:flex-col md:gap-[10px] md:items-center md:justify-center md:animate-[showMenu_0.5s_ease]' : 'md:hidden'
                        } ${
                            this.state.isMobile ? 'md:bg-black md:fixed md:top-0 md:right-0 md:left-0 md:bottom-0' : 'bg-transparent'
                        }`}>
                        <button className={`${
                            this.state.isMobile ? 'md:fixed md:top-[24px] md:right-[24px]' : 'hidden'
                        }`}>
                            <i className='bi bi-x-lg text-[24px]' onClick={this.toggleMenu}></i>
                        </button>
                        <nav className='p-4 hover:text-white cursor-pointer'>Home</nav>
                        <nav className='p-4 hover:text-white cursor-pointer'>Gallery</nav>
                        <nav className='p-4 hover:text-white cursor-pointer'>Products</nav>
                        <nav className='p-4 hover:text-white cursor-pointer'>Review</nav>
                        <nav className='p-4 hover:text-white cursor-pointer'>Support</nav>
                        <nav className='px-6 py-4 hover:text-white cursor-pointer md:order-first' onClick={this.toggleSearch}>
                            <i className="bi bi-search"></i>
                        </nav>
                        <div className={`
                            md:fixed md:top-[70px]
                            ${
                                this.state.search ? 'block' : 'hidden'
                            }
                            ${
                                !this.state.isMobile ? 'absolute bottom-[-50px] right-0 border-[1px] border-gray' : ''
                            }
                        `}>
                            <input type='text' placeholder='Search items..' className='p-[10px] outline-none bg-transparent rounded-[8px] focus:border-gray focus:border-[1px]'/>
                        </div>
                    </div>
                    <div className='hidden md:flex md:flex-1 md:justify-end w-full'>
                        <button className='px-[1em] py-[0.5em] hover:bg-dark-white hover:text-black rounded-[10px]' onClick={this.toggleMenu}>
                            <i className="bi bi-list text-[24px]"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
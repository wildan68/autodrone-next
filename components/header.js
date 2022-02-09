import Image from 'next/image'
import styles from '../styles/header.module.css'


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`flex items-center justify-center gap-28 ${styles.navMenu}`}>
                <div className='flex w-14 h-14 items-center justify-center md:flex-1'>
                    <Image src={require('../assets/img/logo.png')} alt='logo' />
                </div>
                <div className='flex gap-24 max-w-full h-auto text-slate-300 md:hidden'>
                    <nav className='p-4 hover:text-white cursor-pointer'>Home</nav>
                    <nav className='p-4 hover:text-white cursor-pointer'>Gallery</nav>
                    <nav className='p-4 hover:text-white cursor-pointer'>Products</nav>
                    <nav className='p-4 hover:text-white cursor-pointer'>Review</nav>
                    <nav className='p-4 hover:text-white cursor-pointer'>Support</nav>
                    <nav className='px-6 py-4 hover:text-white cursor-pointer'>
                        <Image src={require('../assets/img/svg/search.svg')} width={24} height={24} alt='search' />
                    </nav>
                </div>
                <div className='hidden md:flex md:flex-1 md:justify-end'>
                    <button className='p-[1em] hover:bg-gray rounded-[10px]'>
                        <img src={'img/svg/menu-toggler.svg'} />
                    </button>
                </div>
            </div>
            <div className='pt-10 flex flex-col gap-[30px] items-center px-[40px]'>
                <div className='text-[36px] font-medium text-center'>
                    Representing Drone Light
                </div>
                <div className='text-sm text-center text-gray text-[18px]'>
                    Look up the sky and beautiful world with simple navigation<br />
                    Just record anmd get a lot memories to share, lighty and fast like a lightning
                </div>
                <button className='bg-blue text-white w-40 h-10 rounded-full hover:bg-dark-blue text-[18px]'>
                    GET NOW
                </button>
            </div>
        </div>
    )
}

export default Header;
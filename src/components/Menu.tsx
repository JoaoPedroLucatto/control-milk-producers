import { Link } from 'react-router-dom'
import '../styles/menu.css'

import { IconeHome, IconeLancamento, IconeMenu, IconeProdutores, IconeSobre } from './Icones'


interface LayoutProps{
    active: boolean
}

export default function Menu(props: LayoutProps){

    return(
        <aside id='menu' className={props.active ? 'open' : 'close'}>
            <nav>
                <ul>
                    <li className={`flex pb-8 w-full
                        text-slate-300 text-lg
                        hover:text-slate-100 
                          hover:scale-110 transition-all delay-100s
                    `}>
                        <Link to='/'><span className='inline-block align-bottom pr-3'>{IconeHome}</span><span className={`${!props.active && 'hidden'} origin-left duration-300`}>Home</span></Link>
                    </li>
                    <li className={`flex pb-8
                        text-slate-300 text-lg
                        hover:text-slate-100 hover:scale-110 transition-all delay-100
                    `}>
                        <Link to='/producers' className='flex'>
                            <span className='inline-block align-bottom pr-3'>{IconeProdutores}</span>
                            <span className={`${!props.active && 'hidden'} origin-left duration-300`}>Produtores</span>
                        </Link>
                    </li>
                    <li className={`flex flex-row pb-8
                        text-slate-300 text-lg
                        hover:text-slate-100 hover:scale-110 transition-all delay-100
                    `}>
                        <Link to='/launch'>
                            <span className='inline-block align-bottom pr-3'>{IconeLancamento}</span>
                            <span className={`${!props.active && 'hidden'} origin-left duration-300`}>Lançar</span>
                        </Link>
                    </li>
                    <li className={`flex flex-row pb-8
                      text-slate-300 text-lg
                      hover:text-slate-100 hover:scale-110 transition-all delay-100
                    `}>
                        <Link to='/about'>
                            <span className='inline-block align-bottom pr-3'>{IconeSobre}</span>
                            <span className={`${!props.active && 'hidden'} origin-left duration-300`}>Sobre</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
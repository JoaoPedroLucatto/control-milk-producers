import { useState } from "react";
import { IconeMenu } from "./Icones";
import Menu from "./Menu";



/* const MenuOpenClose= () =>{
    
    if(document.getElementById('menu')?.getElementsByClassName('open')){
        document.getElementById('menu')?.classList.remove('open')
        document.getElementById('menu')?.classList.add('close')
    }
    
    if(!document.getElementById('menu')?.getElementsByClassName('open')){
        document.getElementById('menu')?.classList.remove('close')
        document.getElementById('menu')?.classList.add('open')
    }   
} */


export default function Header(props: any){

    const [menu, setMenu] = useState(true)

    return(
        <>
            <div className={`
            flex flex-grow absolute items-center
            w-screen h-16 bg-slate-600
            `}>

                <div className="px-6">
                    <span>
                        <button id='menu' onClick={() => setMenu(!menu)} className={`hover:scale-125 transition-all delay-75`}>{IconeMenu}</button>   
                    </span>
                </div>

                <div className={`flex flex-col px-6`}>
                    <span className={`text-sm`}>Titulo 1</span>
                    <span className={`text-lg`}>SubTitulo 2</span>
                </div>
                
            </div>
            <Menu active={menu}/>
        </>
        
    )
}
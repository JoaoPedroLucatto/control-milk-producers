


function renderizarThead(){
    return(
        <tr>
            <td className="text-slate-200 text-left pl-3">Id</td>
            <td className="text-slate-200 text-left">Nome</td>
            <td className="text-slate-200 text-left">Localização</td>
        </tr>
    ) 
}


function renderizarDados(){
}

export default function Table(){
    return(
        <table className={`w-full rounded-xl overflow-hidden items-center`}>
            <thead className="bg-gradient-to-r from-slate-700 to-slate-600 text-center">
                {renderizarThead()}
            </thead>
            <tbody>
              
            </tbody>
        </table>
    )
}
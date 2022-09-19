
export function Layaut() {
  return (
    <div className="bg-zinc-200 h-[500px] w-4/5 mx-auto mt-16 p-2 rounded-md">
      <div className="flex px-1 py-3 gap-2 bg-slate-600">
        <h1 className="bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold text-3xl">
          annuThings</h1>
        <input className="flex-1 w-20 bg-zinc-700 text-white rounded-md px-2 text-[1.1rem]" placeholder="Buscar" type={"search"} />
        <button className="text-sm bg-slate-500 text-white rounded-lg p-1 font-semibold hover:brightness-125 border-b-4 border-slate-400 border-l-4 hover:border-none">Publique um anuncio</button>
      </div>
      
      <div></div>
    </div>
  )
}
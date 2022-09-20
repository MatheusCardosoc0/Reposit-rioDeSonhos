import { Image } from "../img/casa1";

export function Ad(){


  

  return(
    <div className="bg-gray-500 w-[14rem]">
      <img className="w-full" src={Image} />
      <div className=" text-base flex flex-col my-2 gap-2 p-2 text-zinc-200">
        <h2 className="text-lg font-semibold">Mansão na praia</h2>
        <p>mansão top perto de bauru</p>
        <p>R$ 400.00</p>
      </div>
    </div>
  )
}
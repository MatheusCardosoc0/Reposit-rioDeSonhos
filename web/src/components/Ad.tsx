import { Image } from "../img/casa1";

export interface AdProps{
  imageUrl: string
  title: string
  description: string
  price: string
}

export function Ad({description, price, title, imageUrl}: AdProps){

  return(
    <div className="bg-gray-500 w-[14rem]">
      <img className="w-full" src={imageUrl} />
      <div className=" text-base flex flex-col my-2 gap-2 p-2 text-zinc-200">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
        <p>R$ {price}</p>
      </div>
    </div>
  )
}
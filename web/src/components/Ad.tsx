
export interface AdProps{
  imageUrl: string
  title: string
  description: string
  price: any
}

export function Ad({description, price, title, imageUrl}: AdProps){

  return(
    <div className="bg-gray-500 w-[8rem] sm:w-[16rem] md:w-[20rem] text-sm">
      <img className="w-full" src={imageUrl} />
      <div className=" text-sm md:text-xl flex flex-col my-2 gap-2 p-2 text-zinc-200">
        <h2 className="text-sm md:text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
        <p>R$ {price}</p>
      </div>
    </div>
  )
}
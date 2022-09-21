import { Ad } from "./Ad";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAds } from "../hooks/useAds";

export function Layaut(props: any) {


  const {buscador, setBuscador, setResultBusca,ads} = useAds()

  

  async function handleChange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.title || !data.price) {
      return
    }

    try {
      await axios.post('http://localhost:3444/ads', {
        imageUrl: data.imageUrl,
        title: data.title,
        description: data.description,
        price: data.price,
      })
      alert('Sucesso')
    } catch (err){
      console.log(err)
      alert('Deu ruim!')
    }
  }


  return (
    <div className="bg-zinc-200 h-[500px] w-4/5 mx-auto mt-16 p-2 rounded-md overflow-auto">
      <div className="flex px-1 py-3 gap-2 bg-slate-600">
        <h1 className="bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold text-3xl">
          annuThings</h1>
        <input className="flex-1 w-20 bg-zinc-700 text-white rounded-md px-2 text-[1.1rem]" placeholder="Buscar" type={"text"} onChange={e => setBuscador(e.target.value)} value={buscador} />
        <Dialog.Root>
          <Dialog.Trigger className="text-sm bg-slate-500 text-white rounded-lg p-1 font-semibold hover:brightness-125 border-b-4 border-slate-400 border-l-4 hover:border-none">
            Publique um anuncio
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="bg-orange-500/20 inset-0 fixed" />
            <Dialog.Content className=" bg-slate-500 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 px-6 py-8 w-[480px] rounded-lg">
              <Dialog.Title className="text-zinc-100 font-bold text-2xl ">Publique seu anuncio</Dialog.Title>
              <form className="flex flex-col gap-8 px-6 pt-8 text-zinc-200 "
                onSubmit={handleChange}>
                <div className="flex gap-4">
                  <label>
                    Título do anuncio
                    <input name="title" />
                  </label>
                  <label>
                    Preço do anúncio
                    <input name="price" />
                  </label>
                </div>
                <div className="flex gap-4">
                  <label className="">
                    Descrição
                    <input name="description" />
                  </label>
                  <label className="">
                    Url da imagem
                    <input name="imageUrl" />
                  </label>
                </div>
                <div className="flex justify-start gap-10">
                  <Dialog.Close className="bg-orange-500 p-2 rounded text-white px-3">
                    Cancelar
                  </Dialog.Close>
                  <button type={"submit"} className="bg-blue-500 p-1 rounded text-white px-3">Criar anúncio</button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="flex gap-4 flex-wrap justify-center mt-4 p-1 pt-4 bg-slate-300 rounded-lg">
        {props.children}
      </div>
    </div>
  )
}
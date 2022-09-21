import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { FormEvent } from 'react';


export function CreateAdModal(){

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
    } catch (err) {
      console.log(err)
      alert('Deu ruim!')
    }
  }


  return(
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
  )
}
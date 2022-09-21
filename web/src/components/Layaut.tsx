import { Ad } from "./Ad";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAds } from "../hooks/useAds";
import { CreateAdModal } from "./CreateAdModal";

export function Layaut(props: any) {

  return (
    <div className="bg-zinc-200 h-screen w-9/10 mx-auto   overflow-auto pb-8">
      <div className="flex px-1 py-3 justify-around bg-slate-600 md:px-10 md:py-6">
        <div className="md:flex md:gap-10">
          <h1 className="bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold text-xl md:text-4xl">
            annuThings</h1>
          <input className="flex-1 w-28 md:w-full bg-zinc-700 text-white rounded-md px-2 text-[1.1rem]" placeholder="Buscar" type={"text"} onChange={e => props.func(e.target.value)} value={props.most} />
        </div>
        <Dialog.Root>
          <Dialog.Trigger className="text-sm md:ml-8 bg-slate-500 text-white rounded-lg p-1 font-semibold hover:brightness-125 border-b-4 border-slate-400 border-l-4 md:text-xl md:p-2 hover:border-none">
            Publique um anuncio
          </Dialog.Trigger>

          <CreateAdModal />
        </Dialog.Root>
      </div>

      <div className="flex gap-4 md:gap-8 flex-wrap justify-center mt-16 p-1 pt-8 pb-60 bg-slate-300 rounded-lg overflow-auto mx-4 h-[800px]">
        {props.children}
      </div>
    </div>
  )
}
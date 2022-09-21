import { useEffect, useState } from "react"
import { AdProps } from "../components/Ad"

export function useAds(){

  const[ads, setAds] = useState<AdProps[]>([])

  const[buscador, setBuscador] = useState('')
  const[resultBusca, setResultBusca] = useState<AdProps[]>([])
  const[busca,setBusca] = useState(false)

  



  return{
    ads,
    setAds,
    buscador,
    setBuscador,
    resultBusca,
    setResultBusca,
    busca,
    setBusca
  }
}
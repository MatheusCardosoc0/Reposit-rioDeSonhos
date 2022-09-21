import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Ad, AdProps } from './components/Ad'
import { Layaut } from './components/Layaut'
import axios from 'axios'
import { useAds } from './hooks/useAds'



function App() {
  const {ads, setAds, buscador, resultBusca, busca, setResultBusca, setBuscador, setBusca} = useAds()

  useEffect(() =>{
    axios('http://localhost:3444/ads')
    .then(response => {
      setAds(response.data)
    })
  },[])

  useEffect(()=>{
    if(buscador.length > 0){
      setBusca(true)
    const dados = new Array

    ads?.map(ads =>{
      const regra = new RegExp(buscador, "gi")
      if(regra.test(ads.title)){
        dados.push(ads)
      }
    })
    console.log(ads)
    setResultBusca(dados)
  }
    else{
      setBusca(false)
    }
  },[buscador])

  

  return (
    <div className="text-2xl">
      <Layaut most={buscador} func={setBuscador}>
      {busca?
      resultBusca.map(ad =>{
        return(
          <Ad key={ad.price}
          imageUrl={ad.imageUrl}
          description={ad.description}
          price={ad.price.slice('', -2) + '.' + ad.price.slice(-2)}
          title={ad.title}
          />
        )
      }):
      ads.map(ad =>{
        return(
          <Ad key={ad.price}
          imageUrl={ad.imageUrl}
          description={ad.description}
          price={ad.price.slice('', -2) + '.' + ad.price.slice(-2)}
          title={ad.title}
          />
        )
      })}
      </Layaut>
    </div>
  )
}

export default App

interface ButtonChangesProps{
  text: string
}



export function ButtonChange({text}: ButtonChangesProps){
  return(
    <button>
      {text}
    </button>
  )
}
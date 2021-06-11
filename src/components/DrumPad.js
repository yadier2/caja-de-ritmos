import React from 'react'

export const Drumpad = ({ text, sound }) => {

  const audio = React.useRef()

  React.useEffect(() => {

    audio.current.addEventListener('ended', () => {
      const parent = audio.current.parentNode
      parent.classList.remove('active')
    } )
    
    document.addEventListener("keydown", (e) => {
      const id = e.key.toUpperCase()
      const audio = document.getElementById(id)
      if(audio){
        audio.currentTime = 0
        const parent = audio.parentNode
        parent.classList.add('active')
      
         const display = parent.parentNode
         display.querySelector('h1').innerText = id+ ' is playng'
         audio.play()
      }
    })

    return () => { 
    }
  }, [])
  
  const playSound = () => {
    audio.current.play()
    const id = audio.current.id;
    const parent = audio.current.parentNode
    parent.classList.add('active')

    const display = parent.parentNode
    display.querySelector('h1').innerText = id+ ' is playng'

  }

  return (
    <div className="drum-pad border rounded m-1 shadow-sm p-3"
      id={'drum-'+text} 
      onClick={playSound}>
        
      {text}
      <audio src={sound} ref={audio} className='clip'  id={text} />
    </div>
  )
}
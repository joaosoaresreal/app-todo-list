
import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [player, setPlayer] = useState<any>({
    name: "Joao",
    nickname: "soares",
    score: 0
  })

  const handleClick=() => {
    const newScore = player.score +1;
    setPlayer({...player, score:newScore})
  }

  const handleChangeName=(event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value

    setPlayer({...player, name:newName})
  }

  const handleChangeNickName=(event: ChangeEvent<HTMLInputElement>) => {
    const newNickName = event.target.value

    setPlayer({...player, nickname:newNickName})
  }


  return (
    <>
      <h1>Imutabilidade</h1>

      <h2>Dados do jogador: </h2>
      <p>
        <h4>Score: {player.score}</h4>
        <button onClick={handleClick}>+</button>
      </p>
      <p>
        <label>
          Player Name:
          <input type='text' name='name' onChange={handleChangeName} value={player.name}/>
        </label>
        <label>
          Player NickName:
          <input type='text' name='nickname' onChange={handleChangeNickName} value={player.nickname}/>
        </label>
      </p>
      <hr/>
      <h3>{player.name} | {player.nickname}</h3>

    </>
  )
}

export default App

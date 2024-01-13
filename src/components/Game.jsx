import { useState, useRef } from "react"
import "./Game.css"

function Game({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, guesses, score, wrongLetters}) {
    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e)  => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter("")

        letterInputRef.current.focus()
    }
    
    return (
        <div className="game">
           <h1>Adivinhe a palavra</h1>

           <h3 className="tip">Dica sobre a palavra: 
                <span> {pickedCategory}</span>
           </h3>

            <p>Você ainda tem {guesses} tentativa(s).</p>

           <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                ))}
           </div>

           <div className="letterContainer">
                <p>Tente Adivinhar uma letra da palavra: </p>
                <form onSubmit={handleSubmit} >
                    <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
                    <button>Jogar</button>
                </form>
           </div>

           <p className="points">
                <span>Potuação: {score}</span>
           </p>

           <div className="wrongLettersContainer">
                <p>Letras já utilizadas: </p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
           </div>
        </div>
    )
}

export default Game
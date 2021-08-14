import { useState } from "react";

const WordGameHooks = ()=>{
    const [word,setWord] = useState('김민지')
    const [guess,setGuess] =useState('')
    const [result, setResult] =useState('')
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(guess.length <=1){
            return;
        }
        if(word.slice(-1) === guess.slice(0,1) ){
            setResult(guess + "정답")
            setWord(guess)
            setGuess('')
        }else{
            setResult(guess + "땡")
            setGuess('')
        }
    }
    const handleChange=(event)=>{
        setGuess(event.target.value)
    }
    return(
        <>
            <h1>{word}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={guess}  onChange={handleChange}/>
            </form>
            <h4>{result}</h4>
        </>
    )
}

export default WordGameHooks;
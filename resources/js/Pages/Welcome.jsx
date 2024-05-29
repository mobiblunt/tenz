import FrameComponent from "@/Components/FrameComponent";
import Die from '@/Components/Die';
import { useState, useEffect } from 'react';
import PrimaryButton from "@/Components/PrimaryButton";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import '../../css/index.css'


export default function Welcome({ auth, className="" }) {
    const [numbs, setNumbs] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const diceElements = numbs.map(die => <Die value={die.value} 
                                                isHeld={die.isHeld} 
                                                key={die.id}
                                                holdDice={()=>holdDice(die.id)}
                                                />)


useEffect(()=> {
    const allHeld = numbs.every(die => die.isHeld)
    const sameValue = numbs.every(die => die.value)
            if (allHeld && sameValue) {
                setTenzies(true)
                console.log("you don win")
            }
        
    
},[numbs])
    function allNewDice() {
        
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push( generateNewDie())
        }
        return newDice
    }
    const holdDice = (id) => {
        setNumbs((prev) => {
            return (
                prev.map((num) => {
                    return num.id === id ? {...num, isHeld: !num.isHeld} : num
                })
            )
        })
    } 

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    const rollDice = () => {
       
        setNumbs((prev) => {
            return (
                prev.map((num) => {
                    return num.isHeld ? num : generateNewDie()
                })
            )
        })
       
    }

    const newGame = () => {
        setNumbs(allNewDice())
        setTenzies(false)
    }

   //  console.log(numbs)
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <br></br>
            <button className="roll-dice" onClick={ tenzies ? newGame : rollDice}>{tenzies ? "Reset" : "Roll"}</button>
        </main>
    );
}



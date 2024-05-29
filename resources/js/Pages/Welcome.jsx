import FrameComponent from "@/Components/FrameComponent";
import Die from '@/Components/Die';
import { useState } from 'react';
import '../../css/index.css';


export default function Welcome({ auth, className="" }) {
    const [numbs, setNumbs] = useState(allNewDice())
    const diceElements = numbs.map(die => <Die value={die} />)
    function allNewDice() {
        
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    console.log(numbs)
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    );
}



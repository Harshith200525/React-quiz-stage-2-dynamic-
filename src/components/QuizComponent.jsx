import './QuizComponent.css'
import data from'../resources/quizQuestion.json'
import { useState } from 'react'

export default function QuizComponent() {

    const [changer, setChanger] = useState(0)

    const handlePrev = () => {
        if(changer == 0){
            setChanger(data.length - 1)
        }else{
            setChanger(changer - 1)
        }
    }

    const handleNext = () => {
        if(changer == data.length - 1){
            setChanger(0)
        }else{
            setChanger(changer + 1)
        }
    }

    const handleQuit = () => {
        let userAction = confirm("Are you sure you want to quit ?")
        userAction ? setChanger(0) : setChanger(changer)
    }

    return (
        <>
            <div className='main-quiz-container'>
                <h1>Question</h1>
                <p>{changer + 1} of 15</p>
                <h3>{data[changer].question}</h3>
                <div className='options'>
                    <button>{data[changer].optionA}</button>
                    <button>{data[changer].optionB}</button>
                    <button>{data[changer].optionC}</button>
                    <button>{data[changer].optionD}</button>
                </div>
                <div className='buttons'>
                    <button className='previous' onClick={handlePrev}>Previous</button>
                    <button className='next' onClick={handleNext}>Next</button>
                    <button className='quit' onClick={handleQuit}>Quit</button>
                </div>
            </div>
        </>
    )
}
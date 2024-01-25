import './ResultComponent.css'

export default function ResultComponent() {
    return (
        <>
            <div className='main-result-container'>
                <h1>Result</h1>
                <div className='detailed-result-container'>
                    <h3>You need more practice!</h3>
                    <h1>Your score is 20%</h1>
                    <div className='detailed-result'>
                        <div className='questions-marks'>
                            <h4>Total number of questions</h4>
                            <h4>15</h4>
                        </div>
                        <div className='questions-marks'>
                            <h4>Number of attempted questions</h4>
                            <h4>9</h4>
                        </div>
                        <div className='questions-marks'>
                            <h4>Number of correct answers</h4>
                            <h4>3</h4>
                        </div>
                        <div className='questions-marks'>
                            <h4>Number of wrong answers</h4>
                            <h4>6</h4>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                <button className='button-1'>Play Again</button>
                <button className='button-2'>Back to home</button>
                </div>
            </div>
        </>
    )
}
import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'question1',
            2: 'question2',
            3: 'question3',
            4: 'question4',
            5: 'question5',
            6: 'question6',
            7: 'question7',
            8: 'question8',
            9: 'question9',
            10: 'question10'
        },
        answers: {
            1: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            2: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            3: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            4: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            5: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            6: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            7: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            8: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            9: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            },
            10: {
                1: 'option1',
                2: 'option2',
                3: 'option3'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '3',
            4: '1',
            5: '2',
            6: '3',
            7: '1',
            8: '2',
            9: '3',
            10: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
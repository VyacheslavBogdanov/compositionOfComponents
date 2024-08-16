import { AppLayout } from './AppLayout';
import { useState } from 'react'

const restartButton = require('./img/restart.png');

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

  const checkWinner = (field, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) => pattern.every((index) => field[index] === currentPlayer))
  }

export default function App ()  {
	
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	const handleClick = (index) => {
		if (isGameEnded) {
			return
		} else if (field[index] === '') {
			const newField = field.slice()		
			newField[index] = currentPlayer
			setField(newField)
			if (checkWinner(newField, currentPlayer)) {
				setIsGameEnded(true)
				return
			} else if (newField.every((el) => el !== '')) {
				setIsDraw(true)

			}
			setCurrentPlayer((prevState) => prevState === 'X' ? '0' : 'X')
		}
		
	}

	const startOver = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(''))
	}

	return (<>
		<AppLayout field={field} isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} handleClick={handleClick} startOver={startOver} restartButton={restartButton}/>
		
	</>)
}




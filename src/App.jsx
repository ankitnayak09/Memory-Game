import { useEffect, useState } from "react";
import "./App.css";
import { cardImages } from "./constants";
import Card from "./components/Card";

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const [choice1, setChoice1] = useState(null);
	const [choice2, setChoice2] = useState(null);

	const [disabled, setDisabled] = useState(false);

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random(), matched: false }));

		setCards(shuffledCards);
		setTurns(0);
	};

	// Handles the click event for a card
	const handleChoice = (card) => {
		choice1 ? setChoice2(card) : setChoice1(card);
	};

	// Check for Card Matching
	const checkForMatch = (card1, card2) => {
		if (card1.src === card2.src) {
			setCards((prev) => {
				return prev.map((card) => {
					if (card.src === choice1.src) {
						return { ...card, matched: true };
					} else {
						return card;
					}
				});
			});
		} else {
		}
		setTimeout(() => resetChoices(), 1000);
	};

	// reset choices & increase turn
	const resetChoices = () => {
		setChoice1(null);
		setChoice2(null);
		setTurns((prev) => prev + 1);
		setDisabled(false);
	};

	useEffect(() => {
		setDisabled(true);
		if (!choice1 || !choice2) return;
		checkForMatch(choice1, choice2);
	}, [choice2]);

	console.table(cards);
	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<Card
						card={card}
						key={card.id}
						handleChoice={handleChoice}
						flipped={
							card === choice1 || card === choice2 || card.matched
						}
						disabled={disabled}
					/>
				))}
			</div>
		</div>
	);
}

export default App;

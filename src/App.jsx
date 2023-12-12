import { useState } from "react";
import "./App.css";
import { cardImages } from "./constants";
import Card from "./components/Card";

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => (
					<Card card={card} key={card.id} />
				))}
			</div>
		</div>
	);
}

export default App;

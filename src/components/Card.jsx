import "./Card.css";

const Card = ({ card, handleChoice, flipped }) => {
	const handleClick = () => {
		handleChoice(card);
	};
	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				<img className="front" src={card.src} alt="card front" />
				<img
					className="back"
					src="/assets/img/cover.png"
					alt="card back"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default Card;

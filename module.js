
  const deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'AS']
  const sticks = ['hearts', 'picks', 'trebols', 'diamonds']
  let currentCard, nextCard, score = 0, rounds = 0

  const randomCard = () => {
  const randomValue = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
  const randomStick = sticks[Math.floor(Math.random() * sticks.length)];
  return { value: randomValue, stick: randomStick };
};

const game = () => {
  currentCard = randomCard()
  return (`Initial Card: ${currentCard.value} ${currentCard.stick}`)
  round()
}

const round = () => {
  const playerChoice = prompt('Will the next card be "higher" or "lower"?').toLowerCase();
  nextCard = generateRandomCard();
  console.log(`Next Card: ${nextCard.value}${nextCard.stick}`);

}

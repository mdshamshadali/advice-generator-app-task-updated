document.addEventListener('DOMContentLoaded', () => {
    const adviceIdElement = document.getElementById('advice-id');
    const adviceTextElement = document.getElementById('advice-text');
    const diceButton = document.getElementById('dice-btn');

    const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            const { slip } = data;
            adviceIdElement.textContent = slip.id;
            adviceTextElement.textContent = `"${slip.advice}"`;
        } catch (error) {
            adviceTextElement.textContent = 'Sorry, something went wrong. Please try again.';
        }
    };
    fetchAdvice();
    diceButton.addEventListener('click', () => {
        fetchAdvice();
    });
});


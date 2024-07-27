body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.game-container {
    text-align: center;
    background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin-bottom: 20px;
    position: relative;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-size: 2em;
    border: 2px solid #333;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cell:hover {
    background-color: #f1f1f1;
    transform: scale(1.1);
}

.cell:active {
    background-color: #ddd;
    transform: scale(1);
}

.message {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #fff;
    transition: color 0.3s ease;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.1);
}

button:active {
    background-color: #003d80;
    transform: scale(1);
}

@keyframes win {
    0% { background-color: #fff; }
    50% { background-color: #90ee90; }
    100% { background-color: #fff; }
}

.win {
    animation: win 1s infinite;
}

.line {
    position: absolute;
    background-color: #000;
    z-index: 1;
}

.line.horizontal {
    height: 5px;
    width: 300px;
}

.line.vertical {
    width: 5px;
    height: 300px;
}

.line.diagonal-1 {
    width: 5px;
    height: 424px; /* length of the diagonal in a 300x300 grid */
    transform: rotate(45deg);
    top: -62px; /* align diagonal line */
    left: 150px; /* align diagonal line */
}

.line.diagonal-2 {
    width: 5px;
    height: 424px;
    transform: rotate(-45deg);
    top: -62px;
    left: 150px;
}

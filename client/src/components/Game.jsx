import react from 'react';
import { useState } from 'react';
import Board from './Board';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import FlappyBird from './FlappyBird';
import OffBoard from './offBoard';
import { useLocation } from 'react-router-dom';
import '../assets/styles/game.css';

export default function Game({ socket, user, room }) {
    if (!sessionStorage['userName'])
        window.location.href = 'http://localhost:3000/login';
    const location = useLocation();
    const data = location.state;
    const [result, setResult] = useState({
        winner: 'none',
        state: 'none',
        player: 'none',
    });
    const resetGame = () => {
        setResult({
            winner: 'none',
            state: 'none',
            player1: 'none',
            player2: 'none',
        });
    };
    const { width, height } = useWindowSize();
    return (
        <div className="game-container">
            <div className="Game">
                {data == 'onePlayer' ? (
                    <OffBoard />
                ) : (
                    <Board
                        socket={socket}
                        user={user}
                        room={room}
                        result={result}
                        setResult={setResult}
                    />
                )}
                {/* <Board
            socket={socket}
            user={user}
            room={room}
            result={result}
            setResult={setResult}
          /> */}
                {result.state === 'won' && (
                    <div> {result.winner} Won The Game</div>
                )}
                {result.state === 'won' ? (
                    <Confetti width={width} height={height} />
                ) : null}
                {result.state === 'tie' && <div> Game Tieds</div>}
            </div>
            {/* <FlappyBird /> */}
            <div id="songs">
                <audio id="music" loop autoPlay>
                    <source src="../assets/Flappy.mp3" />
                </audio>
            </div>
        </div>
    );
}

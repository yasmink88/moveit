import {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const{resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();

    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Win {activeChallenge.amount} XP</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>Oops!</button>
                        <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>I did it!</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finish a cycle to receive challenges</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Level up by completing challenges!
                </p>

            </div>
            ) }
            
        </div>
    );
}
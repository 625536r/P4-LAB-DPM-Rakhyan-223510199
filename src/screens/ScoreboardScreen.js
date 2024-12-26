import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';
import TeamScore from '../components/TeamScore';
import ResetButton from '../components/ResetButton';

const ScoreboardScreen = () => {
  const [scores, setScores] = useState({
    teamA: 0,
    teamB: 0
  });
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = useCallback((team, score) => {
    if (score >= 10) {
      setGameOver(true);
      Alert.alert(
        "Pertandingan Selesai!",
        `${team} Menang!`,
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  }, []);

  const updateScore = useCallback((team, increment) => {
    if (gameOver) return;

    setScores(prevScores => {
      const newScores = { ...prevScores };
      const currentScore = team === 'A' ? prevScores.teamA : prevScores.teamB;
      const newScore = currentScore + increment;

      if (newScore >= 0) {
        if (team === 'A') {
          newScores.teamA = newScore;
          if (newScore >= 10) checkWinner('Tim A', newScore);
        } else {
          newScores.teamB = newScore;
          if (newScore >= 10) checkWinner('Tim B', newScore);
        }
      }

      return newScores;
    });
  }, [gameOver, checkWinner]);

  const resetGame = useCallback(() => {
    setScores({
      teamA: 0,
      teamB: 0
    });
    setGameOver(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Skor Futsal</Text>
        
        <View style={styles.scoreContainer}>
          <TeamScore
            teamName="Tim A"
            score={scores.teamA}
            onIncrement={() => updateScore('A', 1)}
            onDecrement={() => updateScore('A', -1)}
            isWinning={scores.teamA > scores.teamB}
          />
          
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          
          <TeamScore
            teamName="Tim B"
            score={scores.teamB}
            onIncrement={() => updateScore('B', 1)}
            onDecrement={() => updateScore('B', -1)}
            isWinning={scores.teamB > scores.teamA}
          />
        </View>

        <ResetButton onPress={resetGame} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 30,
  },
  vsContainer: {
    backgroundColor: '#34495e',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  vsText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScoreboardScreen;
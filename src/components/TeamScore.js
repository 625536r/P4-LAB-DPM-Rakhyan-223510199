import { View, Text, StyleSheet } from 'react-native';
import ScoreButton from './ScoreButton';

const TeamScore = ({ 
  teamName = '', 
  score = 0, 
  onIncrement = () => {}, 
  onDecrement = () => {}, 
  isWinning = false 
}) => {
  return (
    <View style={[styles.teamContainer, isWinning && styles.winningTeam]}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ScoreButton onPress={onIncrement} title="+" />
        <ScoreButton onPress={onDecrement} title="-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  winningTeam: {
    backgroundColor: '#f8f9fa',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  scoreContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    minWidth: 80,
    alignItems: 'center',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#34495e',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default TeamScore;
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ResetButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity
      style={styles.resetButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default ResetButton;
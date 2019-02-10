import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import Colors from './component/ConsColor';
const { width, height } = Dimensions.get('window'); //根據裝置做調整
// const Colors = {
//   poweryello: '#ffcc',
//   black: '#000'
// };
export const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: height / 2,
    backgroundColor: Colors.poweryello,
    alignItems: 'center' //讓一組物件置中
  },
  say: {
    color: 'red'
  }
});

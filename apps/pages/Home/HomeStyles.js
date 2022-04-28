import { StyleSheet, Dimensions } from 'react-native';
const size = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  row: {
    margin: 10,
    alignSelf: "center",
    alignItems: 'center'
  },
  btn_camera: {
    borderWidth: 1,
    borderColor: '#CCC',
    height: 40,
    width: 200,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  tx_btn: {
    fontSize: 12,
    fontWeight: "bold",
    color: '#444',
    textAlign: "center"
  },
})

export default styles;
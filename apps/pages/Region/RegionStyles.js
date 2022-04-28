import { StyleSheet, Dimensions } from 'react-native';
const size = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  dropdown_header: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#CCC",
    margin: 5,
    borderColor: "#F2F2F2",
    padding: 7,
    marginBottom: 0
  },
  dropdown: {
    borderBottomWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 7
  },
  tx_dropdown: {
    color: "#444",
  },
  title_in: {
    marginLeft: 5,
    color: "#444"
  },
  in: {
    borderColor: "#CCC",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  row: {
    flexDirection: "row"
  },
  col7: {
    width: "70%"
  },
  col3: {
    width: "30%"
  },
  btn: {
    backgroundColor: "#574491",
    paddingLeft: 30,
    paddingRight: 30,
    height: 30,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  tx_btn: {
    color: "#FFF",
    fontSize: 11
  },
  form: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC"
  },
  col5: {
    width: "50%"
  },
  tx_hsl: {
    color: "#444",
    fontSize: 12,
    marginBottom: 7
  },
})

export default styles;
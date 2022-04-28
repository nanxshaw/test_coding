import { StyleSheet, Dimensions } from 'react-native';
const size = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10
  },
  list_box: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    margin: 5,
    width: "48%",
    alignItems: "center"
  },
  img: {
    width: size / 2 - 10,
    height: size / 4
  },
  img_profile: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  list_text: {
    fontSize: 13,
    color: "#444",
    textAlign: 'center'
  },
  list_user: {
    fontSize: 12,
    color: "#444",
    textAlign: 'center',
    marginLeft: 10
  },
  row: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: "center",
    alignItems: 'center'
  },
  btn_primary: {
    backgroundColor: "#574491",
    height: 30,
    width: 100,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  tx_btn: {
    fontSize: 12,
    fontWeight: "bold",
    color: '#fff'
  },
  btn_tag: {
    backgroundColor: "#574491",
    borderRadius: 5,
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10
  },
  tx_tag: {
    color: "#FFF",
    fontSize: 11
  },
  in: {
    borderWidth: 1,
    borderColor: "#CCC",
    margin: 5,
    borderRadius: 10,
    height: 40,
    padding: 0,
    paddingLeft: 10
  },
})

export default styles;
import { StyleSheet, Dimensions } from "react-native";

const{width, height} =  Dimensions.get('window');

export default styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
  },
  itemImage: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  contentWrapper: {
    justifyContent: "space-around",
    paddingRight: 10,
    width: width * 0.65
  },
  txtName: {
    fontSize: 16,
  },
  txtEmail: {
    color: "#777",
  },
  searchBox: {
    margin: 10, 
    borderColor: '#555', 
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center'
  },
  searchInput:{
    width: '80%',
    height: height* 0.07,
    paddingHorizontal:20,
    fontSize: 16
  }
});
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StatusBar, SafeAreaView, Button } from "react-native";
import Loader from "../../components/loader";
import styles from "./styles";
import { connect } from "react-redux";
import * as userActions from '../../store/actions/user-action-types';
import moment from "moment";
import { TextInput } from "react-native-gesture-handler";

const Home = props => {

  const {recordsData, fetchRecords} = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');


  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image style={styles.itemImage} source={{ uri: item.artworkUrl100 }} />
        <View style={styles.contentWrapper}>
          <Text style={styles.txtName}>{item.trackName}</Text>
          <Text style={styles.txtEmail}>{moment(item.releaseDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Text style={styles.txtName}>${item.trackPrice}</Text>
      </View>
    );
  };

  const onSearch = ()=> {
    const searchedArray= search.toLowerCase().split(" ");
    let word = searchedArray[0];
    for(i=1;i<searchedArray.length; i++){
      word = word + `+${searchedArray[i]}`
    }
    fetchData(word)
  }

  const fetchData = (query)=>{
    setIsLoading(true);
    fetchRecords({query:query, callback: (result)=> setData(result)});
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData('video+editor');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />
      <View style={styles.searchBox}>
        <TextInput 
        style={styles.searchInput}
        onChangeText={(name)=> setSearch(name)}
        placeholder="Type here"
        autoCorrect={false}
        />
        <Button onPress={onSearch} title="Search" />
      </View>
      {isLoading? <Loader isLoading={isLoading}/> : <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item,index) => index+1}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={data.length===0 && <Text style={{textAlign:'center'}}>No sounds found</Text>}
      />}
    </SafeAreaView>
  );
};

const mapStateToProps = ({user: {recordsError, recordsData}}) => ({
  recordsError,
  recordsData
})

export default connect(mapStateToProps, {fetchRecords: userActions.fetchRecords})(Home);

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const BookCell = ({ book, onFavorite, onDelete }) => {
 console.log(book);

  return (
    <View style={styles.container} >
      <View style={styles.left}>
        <Text style={styles.tx}>Title: {book.getTitle()} </Text>
        <Text style={styles.tx}>Autor: {book.getAutor()}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => { onDelete(book);}}>
          <Text style={styles.buton}> Delete</Text>
        </TouchableHighlight >
        <TouchableHighlight style={book.getFavourite() ? styles.butonFav : styles.buton} onPress={() => {
          console.log(book);
          onFavorite(book);
        }}>
          <Text style={styles.btnTx}> Favorite</Text>
        </TouchableHighlight >
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: "90%",
    height: 80,
    backgroundColor: 'blue',
    marginTop: 5,
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
  },
  left: {
    width: "50%",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  right: {

  },
  buton: {
    marginTop:5,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  butonFav: {    
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'yellow',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  btnTx: {

  },
  tx:{
    color:'white'
  }
});

export default BookCell;

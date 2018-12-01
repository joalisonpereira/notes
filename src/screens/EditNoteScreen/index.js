import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';

import NavRow from 'src/components/NavRow';
import NavButton from 'src/components/NavButton';
import ColorPallet from 'src/components/ColorPallet';

import { MESSAGES } from 'src/config';
import styles from './styles';

class EditNoteScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	note: this.props.navigation.state.params.note
    }
  }

  static navigationOptions = {
	 title : MESSAGES.EDIT_NOTE,
	 headerRight:(
		<NavRow>
		  <NavButton
        icon={{
          type:'ionicon',
          name:'ios-lock'
        }}
        onPress={() => console.log("Block note")}
      />
      <NavButton
        icon={{
          type:'ionicon',
          name:'ios-folder'
        }}
        fontSize={26}
        onPress={() => console.log("Save note")}
        containerStyle={{marginTop:1.5}}
      />
    </NavRow>
	 )
  };

  _handlerChange(label,value){
    this.setState({
      note:{
        ...this.state.note,
        [label]:value
      }
    });
  }

  _handlerChangeColor(color){
    const { note } = this.state;
    this.setState({
      note:{
        ...note,
        color
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
      	<TextInput
    			value={this.state.note.title}
    			style={[styles.titleInput,{borderBottomColor:this.state.note.color}]}
    			placeholder="Editar Nota"
    			underlineColorAndroid={"transparent"}
    			onChangeText={text => this._handlerChange('title',text)}	
          autoFocus
        />
        <TextInput
          value={this.state.note.text}
          style={[styles.textInput]}
          textAlignVertical="top"
          underlineColorAndroid={"transparent"}
          onChangeText={text => this._handlerChange('text',text)}
          multiline
      	/>
        <ColorPallet action={color => this._handlerChangeColor(color)} />
      </View>
    );
  }
}

export default EditNoteScreen;
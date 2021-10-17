import { getActionFromState } from "@react-navigation/core"
import React, { useContext } from "react"
import { View, FlatList, Alert } from 'react-native'
import { Avatar, ListItem } from "react-native-elements"
import { Icon, Button } from "react-native-elements"
import UsersContext from "../context/UsersContext"

export default props => {
    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir o usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                bottomDivider
            >
                <Avatar rounded source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    iconProps={{ color:'orange', size:25, name:'pencil' }}
                />
                <ListItem.Chevron 
                    onPress={() => confirmUserDeletion(user)}
                    iconProps={{ color:'orange', size:25, name:'trash' }}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
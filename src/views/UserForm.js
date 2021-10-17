import React, { useContext, useState } from "react"
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import UsersContext from "../context/UsersContext"

export default ({route, navigation}) => {
    //console.warn(props.route.params)
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    
    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})} //pega o usuario todo e só atualiza o nome
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})} //pega o usuario todo e só atualiza o nome
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput 
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})} //pega o usuario todo e só atualiza o nome
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
)
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})
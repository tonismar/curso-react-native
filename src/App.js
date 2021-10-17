import React from "react"
//import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from "./views/UserList"
import UserForm from "./views/UserForm"
import { Icon, Button } from "react-native-elements"
import { UsersProvider } from "./context/UsersContext"

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => ({
                            headerTitle: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                />
                            )}
                        )}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={({ navigation }) => {
                            return {
                                title: "Formulário de Usuários",
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements'
import users from '../data/users'

export default props => {
    //console.warn(Object.keys(props)); // ["navigation","route"]

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider 
                //rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}
            />
        )
        //<Text>{user.name} - {user.email}</Text>
    }


    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}

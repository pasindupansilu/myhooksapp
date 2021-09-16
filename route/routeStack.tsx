import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { route } from './route';


const Stack = createStackNavigator();

const routeStack = () => {
    return (
        <Stack.Navigator initialRouteName={route[0].name}>
            {
                route.map((screen, key) => {
                    return (
                        <Stack.Screen key={key + screen.name} name={screen.name} component={screen.component} options={screen.options} />
                    )
                })
            }
        </Stack.Navigator>
    );
}

export default routeStack;

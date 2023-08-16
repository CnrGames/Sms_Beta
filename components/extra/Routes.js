import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import { getGlobal_Dt } from "../../mocks/NormalData/globalData";
import { estilos } from "../style/Pgeral";
//Screens

import T_Stock_view from "../../Telas/T_Stock_view";
import Dashboard from "../../Telas/Dashboard";
import { useEffect } from "react";

const Stack = createStackNavigator();
const CustomHeader = ({ title }) => {
    return (

        <Text style={estilos.headerText}>{title}</Text>
    );
};



const Routes = () => {
    const { cli, setMe, getMe } = getGlobal_Dt();

    useEffect(() => {
        setMe("Akira");
    }, []);

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Dash'>
                <Stack.Screen name='Stock_V' component={T_Stock_view}
                    options={{
                        title: 'Caixas', headerShown: true,
                        headerTitle: () => <CustomHeader title={cli} />
                    }} />
                <Stack.Screen name='Dash' component={Dashboard}
                    options={{ title: 'Messages' }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
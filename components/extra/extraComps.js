import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

import { ChatUsers_card } from "../Cards/Stock_cards"
import { normalize } from "../geral"

import { getGlobal_Dt } from "../../mocks/NormalData/globalData"

export const ChatList_Ui = ({ DataList, navigation }) => {
    const { setar } = getGlobal_Dt();
    return (
        <View style={{
            borderTopLeftRadius: 20, borderTopRightRadius: 20,
            borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderWidth: 3, borderColor: 'slategray',
            elevation: 3.5

            , width: '98%', alignSelf: 'center', overflow: 'hidden',
            maxHeight: '96%', paddingTop: 5, backgroundColor: 'indianred'
        }}>
            <FlatList
                style={{
                    width: '100%',
                    backgroundColor: 'indianred',
                    flexGrow: 0
                }}

                data={DataList}
                ItemSeparatorComponent={() => {
                    return (<View style={{
                        height: normalize(2), backgroundColor: 'white',
                        width: '80%', alignSelf: 'center', marginVertical: normalize(10)
                    }}>
                    </View>)
                }}
                contentContainerStyle={{ paddingTop: normalize(0) }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={
                                () => {


                                    console.log("Ray: " + index);
                                    setar(item.users[0]);
                                    navigation.navigate("Stock_V");


                                }
                            }>

                            <ChatUsers_card nome={item.users[0]} last_content={item.last_msg}
                                count={item.count} />
                        </TouchableOpacity>
                    )
                }}

            >

            </FlatList>
        </View>
    )

}
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

import { ChatUsers_card } from "../Cards/Stock_cards"
import { normalize } from "../geral"

import { getGlobal_Dt } from "../../mocks/NormalData/globalData"

export const ChatList_Ui = ({ DataList, navigation }) => {
    const { setCli, setChat, getMe } = getGlobal_Dt();
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
                    let nomes = "";
                    if (item.users[0] == getMe) {
                        nomes = item.users[1];
                    } else {
                        nomes = item.users[0];

                    }
                    return (
                        <TouchableOpacity
                            onPress={
                                () => {


                                    let guest = item.users.filter((el) => {
                                        return (el != getMe);
                                    });
                                    setCli(guest);
                                    setChat(item.id);
                                    console.log(item.id + ":Id");
                                    navigation.navigate("Stock_V");


                                }
                            }>

                            <ChatUsers_card
                                nome={nomes}
                                last_content={item.last}
                            // count={item.count}
                            />
                        </TouchableOpacity>
                    )
                }}

            >

            </FlatList>
        </View>
    )

}
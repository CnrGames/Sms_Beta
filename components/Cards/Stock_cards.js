

import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { estilos } from "../style/Pgeral";
import { normalize } from "../geral";



export function ChatContent_card({ nome, isMe }) {

    if (isMe == null) {
        isMe = false;
    }

    return (


        <View style={[isMe == true ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }, {
            minHeight: normalize(40)
        }]}>
            {/**user Icon  */}
            {isMe == false &&
                <View style={[{
                    justifyContent: 'flex-start', borderRadius: 10,
                    marginRight: 5
                }]}>

                    <View style={
                        {
                            width: normalize(40), marginLeft: 6, height: normalize(40),
                            backgroundColor: 'red', alignSelf: 'center',
                            borderRadius: 40, borderWidth: 3, justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={[estilos.letra_Normal, { color: 'white', fontSize: normalize(18) },
                        ]}>U</Text>
                    </View>
                </View>}

            {/**Content */}
            <View style={[isMe == true ? { backgroundColor: 'purple', marginRight: 10 } : { backgroundColor: 'darkslategrey' },
            estilos.w3, { justifyContent: 'center', maxWidth: '70%', borderRadius: 10 }]}>

                <Text style={[estilos.letra_Normal, { color: 'white', paddingHorizontal: 6, paddingVertical: 6 }]}>
                    {nome}
                </Text>
            </View>

            {/**Data */}
            <View style={[{ justifyContent: 'flex-end' }]}>
                <Text style={estilos.letra_Normal}>  Data </Text>
            </View>
        </View>
    );

}


export function ChatUsers_card({ nome, count, last_content }) {



    return (


        <View style={[{
            minHeight: normalize(40), flexDirection: 'row', justifyContent: 'space-between'
        }]}>
            {/**user Icon  */}

            <View style={[{
                justifyContent: 'flex-start', borderRadius: 10
            }]}>

                <View style={
                    {
                        width: normalize(40), marginLeft: 6, height: normalize(40),
                        backgroundColor: 'red', alignSelf: 'center',
                        borderRadius: 40, borderWidth: 3, justifyContent: 'center',
                        alignItems: 'center', elevation: 3.3
                    }}>
                    <Text style={[estilos.letra_Normal, { color: 'white', fontSize: normalize(18) },
                    ]}>U</Text>
                </View>
            </View>

            {/**Content */}
            <View style={[
                { right: "22%", justifyContent: 'center', width: '60%', borderRadius: 10 }]}>

                <Text style={[estilos.letra_Normal, { fontSize: normalize(16), color: 'white', paddingHorizontal: 6, paddingVertical: 6 }]}>
                    {nome}
                </Text>

                <Text style={[estilos.letra_Normal, {
                    fontWeight: '400', color: 'white', paddingHorizontal: 6,
                    paddingVertical: 6
                }]}>
                    {last_content}
                </Text>

            </View>

            {/**Data */}
            <View style={[{
                justifyContent: 'space-between', width: normalize(50)
                , alignItems: 'center'
            }]}>
                <Text style={[estilos.char_userData]}>  Data </Text>
                <Text style={[estilos.char_userData]}>
                    {count}</Text>
            </View>
        </View>
    );

}

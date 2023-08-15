
import React, { useState, useRef } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput, Image } from "react-native";
import { normalize } from "../components/geral";
import { estilos } from "../components/style/Pgeral";


import { ChatContent_card } from "../components/Cards/Stock_cards";

import * as mocks from '../mocks/Dummy_data/m_prods';


//Telas teste

let tamanhos = ["registo", "produto", "estatistica", "relatorio"];
let validator = [true, null, true, false];

//console.log(peds);



let colunas = ["Nome", "Tipo", "quantidade"];
//inputes





export default function T_Stock_view({ navigation }) {

    const [valor, setVal] = useState('');
    const [focado, setfocado] = useState('');

    //Stock View tela



    const inptRef = useRef(null);


    function submitData() {
        setVal('');
        mocks.listaC.push(valor);
    }




    const close_keyB = () => {

        if (inptRef.current) {
            inptRef.current.blur();
        }

    }




    return (

        <View style={{ flex: 1 }}>

            <StatusBar
                barStyle='light-content'
                translucent={false}

                backgroundColor={"black"} />

            <View style={{ backgroundColor: 'lightsteelblue', width: '100%', height: '100%' }}>




                {/*Filtro Pesquisa */}







                {/*Lista */}
                <View



                    style={{ flex: 1, zIndex: 1, marginTop: 14 }}>

                    <FlatList data={mocks.listaC}
                        ItemSeparatorComponent={() => {

                            return (
                                <View style={{
                                    height: 3, backgroundColor: 'white'
                                }}></View>)

                        }}
                        renderItem={({ item, index }) => {
                            return (<ChatContent_card isMe={validator[1]} nome={item} />)
                        }
                        }
                    />


                </View>

                {/*Texto Pesquisa */}
                <View style={{
                    backgroundColor: 'red', width: '100%',
                    maxHeight: 100, zIndex: 1, flexDirection: 'row', alignItems: 'flex-end',
                    paddingVertical: 10, justifyContent: 'center'
                }}>

                    <TouchableOpacity activeOpacity={0.4}

                        style={focado == true ? { display: 'flex' } : { display: 'none' }}

                        onPress={() => {
                            close_keyB();
                            setfocado(false);
                            console.log(focado);
                        }
                        }

                    >
                        {/** Back image */}
                        <Image
                            style={{ height: normalize(20), width: 20, resizeMode: 'stretch' }}
                            source={require('../assets/icon/backArrow.png')}></Image>

                    </TouchableOpacity>

                    <View style={[{
                        flexDirection: 'row', backgroundColor: 'white',
                        width: '70%', overflow: 'hidden',
                        marginLeft: 20, justifyContent: 'flex-end',
                        paddingHorizontal: 10
                    }, estilos.round_borders]}>
                        <TextInput
                            placeholder='Benedikta'
                            multiline
                            maxLength={150}
                            onBlur={() => { setfocado(false) }}
                            onChangeText={(bene) => { setVal(bene) }}
                            value={valor}
                            ref={inptRef}
                            onFocus={() => {
                                setfocado(true);
                                console.log(focado);

                            }}
                            onSubmitEditing={() => { setVal(valor + "/") }}
                            style={{
                                backgroundColor: 'white',
                                paddingLeft: 5, width: '100%', minHeight: 20
                            }}
                        />


                    </View>
                    <TouchableOpacity style={[estilos.bola, {
                        backgroundColor: 'cyan', width: 40,
                        justifyContent: 'center', height: normalize(25), marginLeft: 10
                    }]} onPress={() => { submitData() }} >
                        <Text style={[estilos.letra_Normal, {
                            paddingHorizontal: 2
                        }]}>X</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </View >
    );
}
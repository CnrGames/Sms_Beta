import 'react-native-gesture-handler';
import React, { useState, useRef, useContext } from 'react';
import {
    Text, View, StyleSheet, StatusBar, Dimensions, SafeAreaView,
    KeyboardAvoidingView, TouchableOpacity, FlatList, Modal, Pressable,
    TextInput, ToastAndroid, Image
} from 'react-native';

/*Estilos*/
import { normalize } from '../components/geral';
import { estilos } from '../components/style/Pgeral';
//Datas

import { ChatList_Ui } from '../components/extra/extraComps';
import * as mocks from '../mocks/Dummy_data/m_prods';
//Components

//Telas teste

let tamanhos = ["registo1", "bobo", "estatistica", "relatorio", "registo", "produto", "estatistica", "relatorio", "registo", "produto", "estatistica", "relatorio-final"];
let control_string = ["Stock baixo", "Trocas", "Danos"];
let control_nr = [25, 4, 1];
//console.log(peds);



//inputes

//Mock Datas

import { mockChatData, mockMessages, mockUsers } from '../mocks/entities';
import { GlobalContext } from '../mocks/NormalData/globalData';



export default function Dashboard({ navigation }) {



    const { cli } = useContext(GlobalContext);


    console.log(cli);


    return (



        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                barStyle='light-content'
                translucent={false}

                backgroundColor={"black"} />


            <View style={{ flex: 1 }}>



                <View style={estilos.jnl_funcs}>


                    <ChatList_Ui DataList={mockChatData} navigation={navigation} />

                </View>

            </View>

        </View >


    );
}

import 'react-native-gesture-handler';
import React, { useState, useRef, useContext, useEffect } from 'react';
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
import { getGlobal_Dt } from '../mocks/NormalData/globalData';


//Axios

import axios from 'axios';

//Respone


export default function Dashboard({ navigation }) {



    const { cli, setCli, setChat, getMe } = getGlobal_Dt();

    const [respData, setRespData] = useState([]);
    async function getData() {
        try {

            const resp = await axios.get('http://10.0.2.2:3000/user/' + getMe);

            const ChatRooms = resp.data;
            setRespData(ChatRooms);



        } catch (err) {
            console.log(err)
        };
    }


    useEffect(() => {
        getData();
        console.log("aqui");
        //console.log(respData.length);
    }, [getMe]);


    console.log(cli);


    return (



        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                barStyle='light-content'
                translucent={false}

                backgroundColor={"black"} />


            <View style={{ flex: 1 }}>



                <View style={estilos.jnl_funcs}>


                    <ChatList_Ui DataList={respData} navigation={navigation} />

                </View>

            </View>

        </View >


    );
}


import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput, Image } from "react-native";
import { normalize } from "../components/geral";
import { estilos } from "../components/style/Pgeral";


import { getGlobal_Dt } from "../mocks/NormalData/globalData";
import { ChatContent_card } from "../components/Cards/Stock_cards";

import * as mocks from '../mocks/Dummy_data/m_prods';
import axios from "axios";
import * as utils from "../mocks/NormalData/tool";
//Telas teste


//console.log(peds);



//inputes





export default function T_Stock_view({ navigation }) {

    const [valor, setVal] = useState('');
    const [focado, setfocado] = useState('');


    const { getChat, getMe, cli } = getGlobal_Dt();
    //Stock View tela



    const inptRef = useRef(null);


    const [userDataA, setUDataA] = useState([]);
    const [userDataB, setUDataB] = useState([]);
    const [sortedChat, setStChat] = useState([]);


    async function fetchData() {
        try {
            const resp = await axios.get('https://3h4jk54e3l.execute-api.eu-central-1.amazonaws.com/sms/many/' + getMe);
            //console.log(res.data.data[0].PK);


            const MessagesA = resp.data.data.filter((el) => {
                return (el.chat_id == getChat);
            })


            console.log("A:-->" + MessagesA.length);
            console.log(`He:${cli}//me:${getMe} `);



            const respB = await axios.get('https://3h4jk54e3l.execute-api.eu-central-1.amazonaws.com/sms/many/' + cli);

            let supletnB = [];

            if (cli == "" || cli == getMe) {
                supletnB = [];
            } else {
                supletnB = respB.data.data.filter((el) => {
                    console.log(el.chat_id);
                    return (el.chat_id == getChat);
                });
            }
            const MessagesB = supletnB;


            console.log("Aqui:::" + MessagesB.length);


            const allMessages = [...MessagesA, ...MessagesB];


            allMessages.sort(

                (a, b) => {
                    return (utils.getDataString(a.EntityIndexSK) - utils.getDataString(b.EntityIndexSK));
                });


            setStChat(allMessages);
            await (console.log("finalizado!"));
            //console.log(sortedChat);

        } catch (err) {
            console.log(err)
        };
    }

    const postData = async () => {
        try {
            const response = await axios.post('https://3h4jk54e3l.execute-api.eu-central-1.amazonaws.com/sms', {
                creator_name: getMe,
                content: valor,
                chat_id: getChat
            });

        } catch (error) {
            console.error('Error posting data:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [valor]);



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

                    <FlatList data={sortedChat}
                        ItemSeparatorComponent={() => {

                            return (
                                <View style={{
                                    height: 3, backgroundColor: 'white'
                                }}></View>)

                        }}
                        renderItem={({ item, index }) => {
                            let isMine = false;
                            if (item.creator_name == getMe) {
                                isMine = true;
                            }
                            return (<ChatContent_card isMe={isMine} nome={item.content} sent_time={utils.formatTime(utils.getDataString(item.EntityIndexSK))} />)
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
                    }]} onPress={() => {
                        postData();
                        submitData();
                    }} >
                        <Text style={[estilos.letra_Normal, {
                            paddingHorizontal: 2
                        }]}>Ok</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </View >
    );
}
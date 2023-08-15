
import { StyleSheet } from "react-native";
import { normalize } from "../geral"

let xi;
export default xi = "shoesX";


//Card

let card_tamanho = 125;

let estilos = StyleSheet.create(
    {

        jnl_info:
        {
            backgroundColor: 'blue',
            width: '100%',
            height: '43%',
            alignItems: 'center',
            justifyContent: 'center'

        },
        jnl_funcs:
        {
            backgroundColor: 'white', top: 10,
            width: '100%',
            flex: 1,
            overflow: 'hidden',
            justifyContent: 'flex-start'

        },
        card_func:
        {
            backgroundColor: 'red',
            width: normalize(card_tamanho)
            , height: normalize(card_tamanho)
            , borderRadius: 18,
            borderWidth: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'darkred'
        },
        bola:
        {
            height: 140
            , width: 150
            , borderRadius: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',

        },
        secc_fltr_pesq:
        {
            backgroundColor: 'pink', paddingHorizontal: 10, flexDirection: 'column',
            justifyContent: 'center', width: '100%', height: 45, zIndex: 4
            , paddingTop: '3%'
        },

        //width

        w3:
        {
            borderWidth: 3
        }


        ////////Custom
        ,
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center', height: normalize(30)
        },
        headerImage: {
            width: 24,
            height: 24,
            marginRight: 8,
        },
        headerText: {
            fontSize: 18,
        }
        ////////////letras

        , letra_Normal:
        {
            fontSize: normalize(13),
            fontWeight: '700'
        },
        letra_h1:
        {
            fontSize: normalize(25),
            fontWeight: '900',
            color: 'white'
        },
        round_borders:
        {
            borderTopRightRadius: 6, borderBottomRightRadius: 6,
            borderTopLeftRadius: 6, borderBottomLeftRadius: 6
        }
        ,
        char_userData:
        {
            color: 'white',
            fontWeight: '700'
            ,
            fontSize: normalize(13),

        }
    });

export { estilos }

import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "../style/Pgeral";
import { normalize } from "../geral";
import Pgeral from "../style/Pgeral";


export function Stock_Boper({ nome, func, trans, navigation }) {

    return (
        <TouchableOpacity style={{
            backgroundColor: 'orange', width: 100, height: '100%',
            marginRight: 2, alignItems: 'center', justifyContent: 'center',
        }} onPress={() => {
            if (trans == true) {
                navigation.navigate('Dash');
                console.log("horray");
            }
        }}>
            <Text style={{ fontSize: 15, fontWeight: '900' }}>@</Text>
            <Text style={{ fontSize: 15, fontWeight: '900' }}>{nome}</Text>
        </TouchableOpacity>
    );


}

export function DropD_viewr({ nome, func, cust_ref, cust_layout }) {


    return (
        <View style={estilos.secc_fltr_pesq}>

            <TouchableOpacity
                activeOpacity={0.8}
                ref={cust_ref}
                onLayout={
                    cust_layout
                }
                onPress={func}
                style={[estilos.round_borders,
                {
                    backgroundColor: 'white', width: '60%', height: 30,
                    alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',
                    paddingHorizontal: 10, bottom: '1.5%'
                }]}>
                <Text style={estilos.letra_Normal}>{nome}</Text>

                <View style={{ height: '100%', borderLeftWidth: 2 }}>
                    <Text style={[estilos.letra_Normal, {
                        width: normalize(24),
                        paddingLeft: 6, height: '100%', textAlign: 'center', textAlignVertical: 'center'
                    }]}>V</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}
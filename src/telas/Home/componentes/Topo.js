import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from '../../../assets/logo.png'

export default function Topo() {

    return (
        <View style={style.topo}>
            <Image source={logo} style={style.imagem}/>
            <Text style={style.boasvindas}>Olá Gustavo</Text>
            <Text style={style.legenda}>Encontre os melhores produtores</Text>

        </View>
    )
}

const style = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasvindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        color: 'black',
        fontWeight: 'bold'
    }, 
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }

})
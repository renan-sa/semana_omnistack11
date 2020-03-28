import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from './style';
import LogoImg from '../../assets/logo.png';
import Api from '../../services/api';
import style from './style';

function Incidents () {
    const navigation = useNavigation();
    const [ incidents, setIncidents ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading] = useState(false);

    useEffect(() => {
        loadIncidents();
    },
    []);

    function navigateToDetail (incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents () {
        if (loading)
            return;

        if (total > 0 && incidents.length === total)
            return;
        
        setLoading(true);

        const response = await Api.get('incidents', {
            params: { page }
        });
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={LogoImg}/>
                <Text style={Styles.headerText}>
                    Total de <Text style={Styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={Styles.title}>
                Bem-vindo!
            </Text>
            <Text style={Styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>

            <FlatList 
                data={incidents}
                style={Styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={Styles.incident}>
                        <Text style={Styles.incidentProperty}>ONG:</Text>
                        <Text style={Styles.incidentValue}>{incident.name}</Text>

                        <Text style={Styles.incidentProperty}>CASO:</Text>
                        <Text style={Styles.incidentValue}>{incident.title}</Text>

                        <Text style={Styles.incidentProperty}>VALOR:</Text>
                        <Text style={Styles.incidentValue}>{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(incident.value)}</Text>

                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={style.detailsButtonText}>
                                Ver mais detalhes
                            </Text>
                            <Feather 
                                name="arrow-right"
                                size={16}
                                color="#E02041"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default Incidents;
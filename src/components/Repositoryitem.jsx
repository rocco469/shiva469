import react from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container} >
        <StyledText>{props.fullname}</StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText>{props.languaje}</StyledText>
        <StyledText>{props.star}</StyledText>
        <StyledText>{props.forks}</StyledText>
        <StyledText>{props.review}</StyledText>
        <StyledText>{props.Rating}</StyledText>
    </View>)
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBoton: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09a',
        fontWeight: 'bold',
        marginBottom: 5
    }
})
export default RepositoryItem
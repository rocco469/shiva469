import react from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fonWeights.normal

    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.TextSecondary
    },
    bold:{
        frontWeigth: theme.fonWeights.bold
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    }
    
})

export default function StyledText ({children, color, fontSize, frontWeigth, style, ...restOfProps }) {
    const textStyles=[
        styles.text,
        color==='primary' && styles.colorPrimary,
        color==='secondary' && styles.colorSecondary,
        fontSize==='subheading' && styles.subheading,
        frontWeigth==='bold' && styles.bold

    ]
    return(
        <Text style= {textStyles} { ...restOfProps}
        
        >
            {children}

        </Text>
    )
}
import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    label: string
    position?: 'left' | 'right'

    onPress?: () => void
    onLongPress?: () => void
}

export default function floatingButton({ label, onPress, onLongPress, position = 'right' }: Props) {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.floatingButton, position === 'right' ? styles.positionRight : styles.positionLeft]}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        padding: 20,
        backgroundColor: '#6558F7',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        elevation: 3,
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    },
})
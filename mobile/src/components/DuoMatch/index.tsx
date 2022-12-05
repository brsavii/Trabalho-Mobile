import React from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    return (
        <Modal transparent statusBarTranslucent {...rest}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <MaterialIcons
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                            name='close'
                        />
                    </TouchableOpacity>

                    <Heading title='Lets play' subtitle='Agora é só começar a jogar!' style={{alignItems: 'center', marginTop: 24}} />    
                    <Text style={styles.label}>Adicione no discord</Text>

                    <TouchableOpacity style={styles.discordButton}>
                    <Text style={styles.discord}>{discord}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
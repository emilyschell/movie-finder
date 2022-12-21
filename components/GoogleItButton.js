import { useCallback } from 'react';
import { Alert, Linking, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../assets/styles';

const GoogleItButton = ({ url }) => {
    const handlePress = useCallback(async () => {
        const canOpen = await Linking.canOpenURL(url);

        if (canOpen) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Device was unable to open Google URL`);
        }
    }, [url]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <Image
                source={require('../assets/images/google-logo.png')}
                resizeMode='contain'
                style={styles.googleLogo}
            />
        </TouchableOpacity>
    );
};

GoogleItButton.propTypes = {
    url: PropTypes.string,
};

export default GoogleItButton;

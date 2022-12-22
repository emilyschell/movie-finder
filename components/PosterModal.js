import { Modal, View, TouchableOpacity, Image } from 'react-native';
import { styles, colors } from '../assets/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const PosterModal = ({ modalShown, movie, onClose }) => {
    return (
        <Modal visible={modalShown} transparent={true}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View style={styles.modal}>
                        <TouchableOpacity>
                            <MaterialIcons
                                name='close'
                                size={35}
                                color={colors.defaultText}
                                style={styles.closeIcon}
                                onPress={() => onClose()}
                            />
                        </TouchableOpacity>
                        <Image
                            source={{
                                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                            }}
                            resizeMode='contain'
                            style={styles.posterLarge}
                            defaultSource={require('../assets/images/fallback-image.jpg')}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

PosterModal.propTypes = {
    modalShown: PropTypes.bool.isRequired,
    movie: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PosterModal;

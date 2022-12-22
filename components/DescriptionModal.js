import {
    Modal,
    View,
    Text,
    Pressable,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { styles, colors } from '../assets/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const DescriptionModal = ({ modalShown, movie, onClose }) => {
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
                                style={{ marginLeft: 240 }}
                                onPress={() => onClose()}
                            />
                        </TouchableOpacity>
                        <ScrollView>
                            <Text
                                style={[
                                    styles.defaultText,
                                    {
                                        fontFamily: 'RobotoBold',
                                    },
                                ]}>
                                {movie.title}
                            </Text>
                            <Text style={styles.defaultText}>
                                {movie.overview}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

DescriptionModal.propTypes = {
    modalShown: PropTypes.bool.isRequired,
    movie: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default DescriptionModal;

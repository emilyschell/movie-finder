import { View, TextInput, TouchableOpacity } from 'react-native';
import { colors, styles } from '../assets/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <FontAwesome
                name='search'
                size={30}
                color={colors.textInputPlaceholder}
            />
            <TextInput
                placeholder='Enter a movie title'
                placeholderTextColor={colors.textInputPlaceholder}
                style={styles.textInput}
            />
            <TouchableOpacity>
                <MaterialIcons
                    name='clear'
                    size={35}
                    color={colors.textInputPlaceholder}
                    style={{ marginLeft: -5 }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;

import { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { colors, styles } from '../assets/styles';
import { useDebounce } from '../utils/useDebounce';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchInput }) => {
    const [input, setInput] = useState('');
    const debouncedInput = useDebounce(input, 500);

    useEffect(() => {
        setSearchInput(debouncedInput);
    }, [debouncedInput]);

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
                onChangeText={setInput}
                value={input}
            />
            <TouchableOpacity>
                <MaterialIcons
                    name='clear'
                    size={35}
                    color={colors.textInputPlaceholder}
                    style={{ marginLeft: -5 }}
                    onPress={() => setInput('')}
                />
            </TouchableOpacity>
        </View>
    );
};

SearchBar.propTypes = {
    setSearchInput: PropTypes.func,
};

export default SearchBar;

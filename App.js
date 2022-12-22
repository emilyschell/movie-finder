import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { styles, colors } from './assets/styles';
import TMDBLogo from './components/TMDB-Logo';
import SearchBar from './components/SearchBar';
import ResultsView from './components/ResultsView';

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                Roboto: require('./assets/fonts/RobotoCondensed-Light.ttf'),
                Rubik: require('./assets/fonts/RubikVinyl-Regular.ttf'),
                RobotoBold: require('./assets/fonts/RobotoCondensed-Bold.ttf'),
                RobotoItalic: require('./assets/fonts/RobotoCondensed-LightItalic.ttf'),
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.headerImage}
                        source={require('./assets/images/Movie-Projector-Icon.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.largeText}>Movie Finder</Text>
                </View>
                <View style={styles.mainSection}>
                    <SearchBar
                        setSearchInput={(input) => setSearchInput(input)}
                    />
                    <ResultsView searchTerm={searchInput} />
                </View>
                <View style={styles.footer}>
                    <TMDBLogo height={50} width={100} />
                    <Text style={styles.footerText}>
                        This product uses the TMDB API but is not endorsed or
                        certified by TMDB.
                    </Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <ActivityIndicator size='large' color={colors.iconColor} />
            </View>
        );
    }
};

export default App;

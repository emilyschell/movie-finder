import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { styles, colors } from './assets/styles';
import TMDBLogo from './components/TMDB-Logo';
import SearchBar from './components/SearchBar';

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                Roboto: require('./assets/fonts/RobotoCondensed-Light.ttf'),
                Rubik: require('./assets/fonts/RubikVinyl-Regular.ttf'),
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
                    <SearchBar />
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
            <View style={styles.container}>
                <ActivityIndicator size='large' color={colors.iconColor} />
            </View>
        );
    }
};

export default App;

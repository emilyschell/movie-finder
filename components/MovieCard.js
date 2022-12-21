import { Image, Text, View } from 'react-native';
import GoogleItButton from './GoogleItButton';
import PropTypes from 'prop-types';
import { styles } from '../assets/styles';

const MovieCard = ({ movie }) => {
    return (
        <View style={styles.movieCard}>
            <View style={styles.dataBlock1}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                    resizeMode='contain'
                    style={styles.poster}
                    defaultSource={require('../assets/images/fallback-image.jpg')}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.defaultText, styles.title]}>
                        {movie.title}
                    </Text>
                    <Text style={[styles.defaultText, styles.year]}>
                        {movie.release_date.slice(0, 4)}
                    </Text>
                </View>
            </View>
            <View style={styles.dataBlock2}>
                <Text
                    style={
                        movie.vote_average < 5.0 && movie.vote_average > 0
                            ? [styles.rating, styles.badRating]
                            : [styles.rating]
                    }>
                    {movie.vote_average > 0 ? movie.vote_average : 'N/A'}
                </Text>
                <GoogleItButton
                    url={`https://www.google.com/search?q=${movie.title} movie`}
                />
            </View>
        </View>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object,
};

export default MovieCard;

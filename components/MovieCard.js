import { Image, Text, TouchableOpacity, View } from 'react-native';
import GoogleItButton from './GoogleItButton';
import PropTypes from 'prop-types';
import { styles } from '../assets/styles';

const MovieCard = ({ movie, setModalShown, setSelectedMovie }) => {
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
                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedMovie(movie);
                            setModalShown(true);
                        }}>
                        <Text style={[styles.defaultText, styles.title]}>
                            {movie.title}
                        </Text>
                    </TouchableOpacity>
                    <Text style={[styles.defaultText, styles.year]}>
                        {movie.release_date
                            ? movie.release_date.slice(0, 4)
                            : ''}
                    </Text>
                </View>
            </View>
            <View style={styles.dataBlock2}>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Text style={styles.ratingLabel}>Rating:</Text>
                    <Text
                        style={
                            movie.vote_average < 5.0 && movie.vote_average > 0
                                ? [styles.rating, styles.badRating]
                                : [styles.rating]
                        }>
                        {movie.vote_average > 0
                            ? movie.vote_average.toFixed(1)
                            : 'N/A'}
                    </Text>
                </View>
                <GoogleItButton
                    url={`https://www.google.com/search?q=${movie.title} movie`}
                />
            </View>
        </View>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    setModalShown: PropTypes.func.isRequired,
    setSelectedMovie: PropTypes.func.isRequired,
};

export default MovieCard;

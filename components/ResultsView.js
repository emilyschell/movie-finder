import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { styles, colors } from '../assets/styles';
import { API_KEY } from '@env';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import DescriptionModal from './DescriptionModal';
import PosterModal from './PosterModal';

const ResultsView = ({ searchTerm }) => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [descModalShown, setDescModalShown] = useState(false);
    const [posterModalShown, setPosterModalShown] = useState(false);

    const getMovies = async (searchTerm) => {
        if (!searchTerm) {
            return;
        }
        setLoading(true);
        let tmdbEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&include_adult=false`;
        try {
            let movies = await (await fetch(tmdbEndpoint)).json();
            setResults(movies.results);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMovies(searchTerm);
    }, [searchTerm]);

    let movieList = results.map((movie) => {
        return (
            <MovieCard
                movie={movie}
                setDescModalShown={setDescModalShown}
                setPosterModalShown={setPosterModalShown}
                setSelectedMovie={setSelectedMovie}
                key={movie.id}
            />
        );
    });

    if (loading && searchTerm) {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <ActivityIndicator size='large' color={colors.iconColor} />
            </View>
        );
    } else if (!loading && searchTerm && results.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={[styles.defaultText, styles.notFoundText]}>
                    Sorry, no movies found for {searchTerm}. Please try a
                    different search.
                </Text>
            </View>
        );
    } else if (!loading && searchTerm) {
        return (
            <>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {movieList}
                </ScrollView>
                <DescriptionModal
                    movie={selectedMovie}
                    modalShown={descModalShown}
                    onClose={() => setDescModalShown(false)}
                />
                <PosterModal
                    movie={selectedMovie}
                    modalShown={posterModalShown}
                    onClose={() => setPosterModalShown(false)}
                />
            </>
        );
    } else {
        return null;
    }
};

ResultsView.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};

export default ResultsView;

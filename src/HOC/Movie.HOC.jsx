import React from 'react';
import {Route} from "react-router-dom";
import MovieLayout from '../Layouts/Movie.Layout';

const MovieHOC =({component: Component, ...rest}) => {
    return(
        <>
            <Route
                {...rest}
                component = {(props) => (
                    <MovieLayout>
                        <Component {...props}/>
                    </MovieLayout>
                )}
            />
        </>
    );
}

export default MovieHOC;
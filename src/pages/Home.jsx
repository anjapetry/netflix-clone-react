import React from 'react';
import requests from '../Requests';
import Main from './Main';
import Row from '../components/Row';

const Home = () => {
	return (
		<>
			<Main />
			<Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
			<Row title="Upcoming" fetchURL={requests.requestUpcoming} />
			<Row title="Popular" fetchURL={requests.requestPopular} />
			<Row title="Trending" fetchURL={requests.requestTrending} />
			<Row title="Top Rated" fetchURL={requests.requestTopRated} />
		</>
	);
};

export default Home;

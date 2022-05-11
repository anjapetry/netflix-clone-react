import React from 'react';
import requests from '../Requests';
import Main from './Main';
import Row from '../components/Row';

const Home = () => {
	return (
		<>
			<Main />
			<Row
				rowId="1"
				title="Now Playing"
				fetchURL={requests.requestNowPlaying}
			/>
			<Row rowID="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
			<Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
			<Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
			<Row rowID="5" title="Top Rated" fetchURL={requests.requestTopRated} />
		</>
	);
};

export default Home;

import { ClassNames } from '@emotion/react';
import { Search, SpaOutlined, SpaRounded } from '@mui/icons-material';
import { TextField, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { editTerm, selectTerm } from '../redux/termSlice';
import Header from './Header';

const useStyles = makeStyles({
	wrapper     : {
		// margin: "200px 20px 0 0"
		display       : 'flex',
		flexDirection : 'column',
		textAlign     : 'center'
	},
	header      : {
		fontSize     : '35px',
		borderBottom : '2px solid #000',
		fontWeight   : 'bolder'
	},
	articleInfo : {
		display        : 'flex',
		alignItems     : 'center',
		padding        : '15px',
		justifyContent : 'space-around'
	},
	icon        : {
		cursor : 'pointer'
	},
	term        : {
		textTransform : 'uppercase',
		color         : '#ff0000',
		borderBottom  : '1px solid'
	}
});

function Home() {
	const [ articles, setArticles ] = useState([]);
	const [ searchValue, setSearchValue ] = useState('');
	const dispatch = useDispatch();
	const term = useSelector(selectTerm);

	useEffect(
		() => {
			const fetchArticles = async () => {
				try {
					const res = await fetch(
						`https://newsapi.org/v2/everything?q=${term}&apiKey=e28096d3bf8248f7b197cc3fe2845c17`
					);
					const articles = await res.json();
					setArticles(articles.articles);
				} catch (error) {}
			};
			fetchArticles();
		},
		[ term ]
	);

	const classes = useStyles();
	return (
		<>
		<Header></Header>
		<div className={classes.wrapper}>
			<div className={classes.articleInfo}>
				<div>
					<TextField id='standard-basic' label='' variant='standard' onChange={(e) => setSearchValue(e.target.value)} />
					<Search onClick={() => dispatch(editTerm(searchValue))} className={classes.icon} />
				</div>
				<h1>
					Currently viewng articles:<span className={classes.term}> {term}</span>
				</h1>
			</div>
			{articles.map((article) => {
				const { author, title, description, url, urlToImage, publishedAt, content } = article;
				return (
					<Card
						author={author}
						title={title}
						description={description}
						url={url}
						urlToImage={urlToImage}
						publishedAt={publishedAt}
						content={content}
					/>
				);
			})}
		</div>
		</>
	);
}

export default Home;

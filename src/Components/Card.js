import { useDispatch, useSelector } from 'react-redux';
import { selectTerm } from '../redux/termSlice';
import './Card.css';

function Card(props) {
	const { author, title, description, url, urlToImage, publishedAt, content } = props;
	return (
		<div class='card'>
			<div class='imgWrapper'>
				<img class='cardImage' src={urlToImage} alt='Article Img' />
			</div>
			<div class='article'>
				<p class='articleTitle'>{title}</p>
				<p class='description'>
					<p>{description}</p>
					{content}{' '}
					<a href={url} target='_blank' class='source'>
						Src.
					</a>
				</p>
				<div class='articleInfo'>
					<p> author: {author}</p>
					<p> published at :{publishedAt}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	footer       : {
		minHeight       : '100px',
		backgroundColor : '#000',
		color           : '#fff',
		display         : 'flex',
		textAlign       : 'center',
		alignItems      : 'center',
		justifyContent  : 'space-around',
		flexDirection   : 'column'
	},
	social_Icons : {
		display        : 'flex',
		justifyContent : 'space-around',
		width          : '50%',
		marginTop      : '15px'
	},
	icons        : {
		cursor    : 'pointer',
		color     : '#858585',
		'&:hover' : {
			color      : '#fff',
			transition : ' .2s linear'
		}
	},
	footer_Links : {
		display        : 'flex',
		width          : '50%',
		justifyContent : 'space-around',
		marginTop      : '15px'
	},
	footer_Link  : {
		cursor    : 'pointer',
		color     : '#858585',
		opacity   : '0,7',
		'&:hover' : {
			color      : '#fff',
			transition : ' .2s linear'
		}
	},

	terms        : {
		display : 'flex',
		margin  : '15px 0'
	},
	term         : {
		cursor    : 'pointer',
		color     : '#858585',
		opacity   : '0,7',
		'&:hover' : {
			color      : '#fff',
			transition : ' .2s linear'
		}
	}
});

function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<p className={classes.social_Icons}>
				<GitHubIcon className={classes.icons} />
				<FacebookIcon className={classes.icons} />
				<LinkedInIcon className={classes.icons} />
				<InstagramIcon className={classes.icons} />
			</p>
			<p className={classes.footer_Links}>
				<span className={classes.footer_Link}>Company</span>
				<span className={classes.footer_Link}>Team</span>
				<span className={classes.footer_Link}>Carrer</span>
			</p>
			<p className={classes.terms}>
				<span className={classes.term}>Privacy Policy & Terms and Conditions</span>
			</p>
		</div>
	);
}

export default Footer;

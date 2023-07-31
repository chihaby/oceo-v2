import PropTypes from "prop-types";
import styles from '../styles/YoutubeEmbed.module.css'

const YoutubeEmbed = () => (
<div className={styles.video_responsive}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/leocfFO_N0o" title="Oceo - Andalucia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

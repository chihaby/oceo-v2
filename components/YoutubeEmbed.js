import PropTypes from "prop-types";
import styles from '../styles/YoutubeEmbed.module.css'

const YoutubeEmbed = () => (
<div className={styles.video_responsive}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/2VFjSxEMMyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

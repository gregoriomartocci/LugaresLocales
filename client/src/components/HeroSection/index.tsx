import Menu from '../Menu'
import styles from './styles.module.css'

type Props = {
    videoUrl?: string,
    imageUrl?: string
}

const HeroSection: React.FC<Props> = ({ videoUrl, imageUrl }) => {
    return (
        <div className={styles.container}>
            {videoUrl && (
                <video autoPlay muted loop className={styles.video}>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}
            {imageUrl && (
                <div className={styles.background} style={{ backgroundImage: `url(${imageUrl})` }} />
            )}
            <div className={styles.content}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentLeft}>
                        <h1>Contenido del HeroSection</h1>
                    </div>
                    <div className={styles.contentRight}>
                        <p>Descripción del HeroSection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
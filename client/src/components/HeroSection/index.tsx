import Menu from '../Menu'
import styles from './styles.module.css'

type Props = {
    videoUrl?: string,
    imageUrl?: string
}

const HeroSection: React.FC<Props> = ({ videoUrl, imageUrl }) => {
    return (
        <div className={styles.container}>
            <Menu />
            {videoUrl && (
                <video autoPlay muted loop className={styles.video}>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}
            {imageUrl && (
                <img src={imageUrl} alt="Imagen de fondo" className={styles.image} />
            )}
            <div className={styles.content}>
                <h1>Contenido del HeroSection</h1>
                <p>Descripción del HeroSection</p>
            </div>
        </div>
    )
}

export default HeroSection

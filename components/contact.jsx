import styles from '../styles/Contact.module.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

export default function Contact() {
    return (
        <div>
            <h2 className="center">Contact</h2>
            <main id='contacts'>
                <a href='https://www.linkedin.com/in/jon-dmclngn/' target='_blank' rel="noopener noreferrer nofollow">
                    <BsLinkedin className={styles.size} />
                </a>
                <a href='https://github.com/JonDmc' target='_blank' rel="noopener noreferrer nofollow">
                    <BsGithub className={styles.size} />
                </a>
                <a href='https://jondmclngn@gmail.com/' target='_blank' rel="noopener noreferrer nofollow">
                    <SiGmail className={styles.size} />
                </a>
            </main>
        </div>
    )
}
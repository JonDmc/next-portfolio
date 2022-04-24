import styles from '../styles/Tech.module.css'
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiPostgresql, SiSequelize, SiExpress } from 'react-icons/si'

export default function Tech() {
    return (
        <div id='tech'>
            <h1 className='center'>Tech stack</h1>
            <main className={styles.container}>
                <section >
                    <FaHtml5 className={`${styles.html5}`} />
                    <FaCss3Alt className={styles.css3} />
                    <SiJavascript className={styles.js} />
                    <FaNodeJs className={styles.size} />
                    <SiExpress className={styles.size} />
                    <SiPostgresql className={styles.postgres} />
                    <SiSequelize className={styles.sqlze} />
                    <SiMongodb className={styles.size} />
                    <FaReact className={styles.react} />
                    <FaPython className={styles.python} />
                </section>
            </main>
        </div>
    )
}
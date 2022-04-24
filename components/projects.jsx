import styles from '../styles/Project.module.css'
import Image from 'next/image'
import { FaNodeJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiPostgresql, SiSequelize, SiExpress } from 'react-icons/si'

const handleBtn = (choice) => {
    switch (choice) {
        case 1:
            window.open('https://jondmc.github.io/Project1-bomber/')
        case 2:
            window.open('https://pokemon-tc-go.herokuapp.com/')
        case 3:
            window.open('https://flourishing-stroopwafel-14214c.netlify.app/')
        case 4:
            window.open('https://www.google.com')

    }
}
export default function Projects() {
    return (
        <div>
            <h2 className="center">Projects</h2>
            <main className={`center row1`} style={{ display: 'flex', gap: '20px' }}>
                <section id="p1" className={`center column ${styles.container}`} >
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <Image
                                    src='https://i.imgur.com/R4JfFtl.jpg'
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div id='p1-desc' className={styles.flipCardBack} >
                                <p> A web-based game inspired by the retro game of Super Bomberman.</p>
                                <br />
                                <div className='row'>
                                    <FaHtml5 className={`${styles.html5}`} />
                                    <FaCss3Alt className={styles.css3} />
                                    <SiJavascript className={styles.js} />
                                </div>
                                <br />
                                <br />
                                <a href='https://jondmc.github.io/Project1-bomber/' target='_blank' rel="noopener noreferrer nofollow">
                                    <div className={styles.alink}>
                                        <p>
                                            Try it out!
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="p2" className={`center column ${styles.container}`} >
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <Image
                                    src='https://i.imgur.com/n0ay8uN.jpg'
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div id='p2-desc' className={styles.flipCardBack}>
                                <p>Inspired by Pokemon: Trading Card, this app will allow the user to experience the basic collecting part of the game.  </p>
                                <br />
                                <div className='row'>
                                    <SiPostgresql className={styles.postgres} />
                                    <SiExpress className={styles.express} />
                                    <FaNodeJs className={styles.size} />
                                    <SiSequelize className={styles.sqlze} />
                                </div>
                                <br />
                                <br />
                                <a className={styles.alink} href='https://pokemon-tc-go.herokuapp.com/' target='_blank' rel="noopener noreferrer nofollow">Try it out!</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="p3" className={`center column ${styles.container}`} >
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <Image
                                    src='https://i.imgur.com/kB8c0k8.jpg'
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div id='p3-desc' className={`${styles.flipCardBack}`}>
                                <p>An app that tests your knowledge on music based on your choice of artist(s).</p>
                                <br />
                                <div className='row'>
                                    <SiMongodb className={styles.size} />
                                    <SiExpress className={styles.express} />
                                    <FaReact className={styles.react} />
                                    <FaNodeJs className={styles.size} />
                                </div>
                                <br />
                                <br />
                                <a className={styles.alink} href='https://flourishing-stroopwafel-14214c.netlify.app/' target='_blank' rel="noopener noreferrer nofollow">Demo</a>
                                <br />
                                <p style={{ color: 'black' }}>P.S.:Please contact the developer for a demo of this app.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="p4" className={`center column ${styles.container}`} >
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <Image
                                    src='https://i.imgur.com/kB8c0k8.jpg'
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div id='p4-desc' className={styles.flipCardBack}>
                                <p>An app that tests your knowledge on music based on your choice of artist(s).</p>
                                <p>Given a short preview of a song, you will need to correctly guess the song.</p>
                                <p>This app will bring out your listening abilities and your competitiveness all while vibing to jams.</p>
                                <em>Built with MongoDB, Express, React, and Node.js</em>
                                <br />
                                <br />
                                {/* <button onClick={() => handleBtn(4)}>Demo</button> */}
                                <a href="https://i.imgur.com/kB8c0k8.jpg" ><button>DEMO</button></a>
                                <br />
                                <br />
                                <em style={{ color: 'red' }}>Disclaimer: Please contact the developer for a demo of this app.</em>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
import styles from '../styles/Project.module.css'

export default function Projects() {
    return (
        <div>
            <h2 className="center">Projects</h2>
            <main className='center'>
                <section id="p1" className={`center column ${styles.container}`} >
                    <div id='p1-pic'>

                    </div>
                    <div id='p1-desc'>
                        <p> A web-based game inspired by the retro game of Super Bomberman.</p>
                        <em> Built with HTML (canvas), CSS and Javascript.</em>
                        <br />
                        <br />
                        <a className={styles.alink} href='https://jondmc.github.io/Project1-bomber/' target='_blank' rel="noopener noreferrer nofollow">Try it out!</a>
                    </div>
                </section>
                <section id="p2" className={`center column ${styles.container}`} >
                    <div id='p2-pic'>

                    </div>
                    <div id='p2-desc'>
                        <p> Pokemon has been popular ever since its release in the 1990s and since that day, it has been continously evolving. </p>
                        <p>So much so, the pokemons that you see on tv and gameboys became a reality through Pokemon Cards, in which up to this day is still very popular for its Collection.</p>
                        <p>This app will allow the user to experience the basic collecting part of the game.  </p>
                        <em>Built with Postgres, Express, and Node.js</em>
                        <br />
                        <br />
                        <a className={styles.alink} href='https://pokemon-tc-go.herokuapp.com/' target='_blank' rel="noopener noreferrer nofollow">Try it out!</a>
                    </div>
                </section>
            </main>

            <main className='center'>
                <section id="p3" className={`center column ${styles.container}`} >
                    <div id='p3-pic'>
                        <p></p>
                    </div>
                    <div id='p3-desc'>
                        <p>An app that tests your knowledge on music based on your choice of artist(s).</p>
                        <p>Given a short preview of a song, you will need to correctly guess the song.</p>
                        <p>This app will bring out your listening abilities and your competitiveness all while vibing to jams.</p>
                        <em>Built with MongoDB, Express, React, and Node.js</em>
                        <br />
                        <br />
                        <a className={styles.alink} href='https://pokemon-tc-go.herokuapp.com/' target='_blank' rel="noopener noreferrer nofollow">Try it out!</a>
                        <br />
                        <br />
                        <em style={{ color: 'red' }}>Disclaimer: Please contact the developer for a demo of this app.</em>
                    </div>
                </section>
                <section id="p4" className={`center column ${styles.container}`} >
                    <div id='p4-pic'>

                    </div>
                    <div id='p4-desc'>

                    </div>
                </section>
            </main>
        </div>
    )
}
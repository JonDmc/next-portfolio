// import SSR caching image tag
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className='container'>
            <h2>About me</h2>
            <main className={`center`}>
                <section id='pic' className={`center column ${styles.container}`} >
                    <h1 className={styles.tealText}>Jon Dimaculangan</h1>
                    {/* <Image
                        src="/vercel.svg"
                        alt="the vercel logo bc I <3 vercel"
                        width={500}
                        height={500}
                    /> */}
                </section>
                <section id='desc' className={`center column ${styles.container}`}>
                    <p>A career working with people in a fast-paced, quality-driven environment has honed me to have intensity and integrity in my work while maintaining high-quality results.</p>
                    <p>Curiosity has always enveloped my mind, it provides me a hint of foresight that gives me the ability to plan and adapt accordingly.</p>
                    <p>I am able to communicate effectively by assessing the current problem as well as solving it by breaking it down into pieces.</p>


                </section>


                {/* loading an image locally */}
                {/* loading an image from anotherr hosting domain */}
                {/* <Image
                    src="https://placekitten.com/300/300"
                    alt="a picture of a magnificent creature"
                    width={300}
                    height={300}
                /> */}
            </main>
        </div>
    )
}

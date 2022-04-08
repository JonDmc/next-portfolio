// import SSR caching image tag
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={`${styles.bgRed} center`}>
            <h1 className={styles.tealText}>About me</h1>

            <p>I am super cool software engineer now, I make neat stuff with codes</p>

            {/* loading an image locally */}
            <Image
                src="/vercel.svg"
                alt="the vercel logo bc I <3 vercel"
                width={500}
                height={500}
            />
            {/* loading an image from anotherr hosting domain */}
            <Image
                src="https://placekitten.com/300/300"
                alt="a picture of a magnificent creature"
                width={300}
                height={300}
            />
        </div>
    )
}

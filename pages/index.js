import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    // How do we show the recently listed NFTs?
    // const value = await contract.getListing(asdfasdf)
    // We will index the events off-chain and then read from our database 
    // Setup a server to listen for those events to be fired, and we will add them to a database to query
    
    // Woah, Centralized bad?
    // For this case good!

    return <div className={styles.container}>Hi!</div>
}

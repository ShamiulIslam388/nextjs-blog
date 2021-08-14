import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <footer className={styles.footer}>
      All right reserved by Shamiul islam
  </footer>
  </>
  )
  
}

export default MyApp

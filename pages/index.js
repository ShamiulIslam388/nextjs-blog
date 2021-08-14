import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="users descriptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post=>(
            <div className={styles.list} key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}   >
          <a>
            <li>{post.title}</li>
          </a>
          </Link>
          </div>
          ))}
        </ul>
      </main>

      
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await response.json()
  const limitdata = data.slice(0, 10)
  return {
    props: {
      posts:limitdata
    }
    }
}

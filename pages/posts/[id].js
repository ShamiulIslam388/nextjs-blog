import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from 'next/head'

const PostDetails = ({post}) => {
    const router = useRouter();
    if(router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{post.title}</title>
            </Head>
            
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link href="/"><a><button>Back to Home</button></a></Link>

        </div>
    )
}

export default PostDetails

export async function getStaticPaths() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await response.json()
    const limitdata = data.slice(0, 10)
    const paths = await limitdata.map((post) => ({
        params: { id : post.id.toString() },
      }))
    return {
        paths,
        fallback: false
      }
}

export async function getStaticProps({params}) {
    console.log('hello');
    console.log('getStaticProps', params);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await response.json()
    return {
      props: {
        post:data
      }
      }
  }




import Head from 'next/head'
import ArticleList from '../components/articleList'
import Articles from '../articles.json'
import Contact from '../components/contact'


export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Megan Blevins - Midwestern Interactive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <ArticleList 
      articles={Articles}/>
      <Contact />
    </div>
  )
}

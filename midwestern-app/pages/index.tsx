import Head from 'next/head'
import ArticleList from '../components/articles/articleList'
import Contact from '../components/contact/contact'
import Test from '../components/test/test'


type Article = {
  id: number,
  title: String,
  body: String,
  image: String
}

async function Home() {
  const res = await fetch('https://midwestern-test.netlify.app/articles.json');
  const articles: Article[] = await res.json();
  return (
    <>
      <Head>
        <title>Megan Blevins - Midwestern Interactive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {articles != undefined &&
        <ArticleList 
        articles={articles}/>
      }
      <Contact />
      <Test />
    </>
  )
}

export default Home
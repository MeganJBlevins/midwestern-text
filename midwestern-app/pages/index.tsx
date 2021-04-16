import Head from 'next/head'
import ArticleList from '../components/articles/articleList'
import Contact from '../components/contact/contact'
import Test from '../components/test/test'

function Home() {

  return (
    <>
      <Head>
        <title>Megan Blevins - Midwestern Interactive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ArticleList />
      <Contact />
      <Test />
    </>
  )
}

export default Home
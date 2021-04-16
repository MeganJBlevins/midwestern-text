import Head from 'next/head'
import ArticleList from '../components/articles/articleList'
import Contact from '../components/contact/contact'
import Test from '../components/test/test'

export interface ListProps {
  articles?: Article[]
}

function Home({articles}: ListProps) {
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


export interface Article {
  id: number,
  title: String,
  body: String,
  image: String
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/articles.json');
  const articles: Article[] = await res.json();

  // Pass data to the page via props
  return { props: { articles } };
}


export default Home
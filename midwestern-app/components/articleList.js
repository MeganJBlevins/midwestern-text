export default function ArticleList({articles}) {
  return (
    <section id="articles">
      <div className="container">
        <h1>Heading One</h1>
        <div className="articles__wrapper">
          {articles.map((article) => ( 
            <div className="article" key={article.id}>
              <div className="article__image" style={{ backgroundImage: `url(${article.image})` }}>
              </div>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <a className="button">Read More</a>
            </div>
          ) )}
        </div>
      </div>
    </section>
  )
}
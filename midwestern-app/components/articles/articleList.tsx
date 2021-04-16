import React, { Component } from 'react';
import { IProps, IState, Article } from './interface';

class ArticleList extends React.Component<IProps, IState>  {
  constructor(props: IProps) {
    super(props);
    this.state = {
      articles: Array<Article>()
    }
    this.getData = this.getData.bind(this);
  }

  async getData() {
    const res = await fetch('https://midwestern-test.netlify.app/articles.json');
    const articles: Array<Article> = await res.json();

    this.setState({articles: articles});
  }

  componentDidMount() {
    this.getData();
  }
 

  render() {
    return (
      <section id="articles">
        <div className="container">
          <h1>Heading One</h1>
          <div className="articles__wrapper">
            {this.state.articles.map((article) => ( 
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
}

export default ArticleList;
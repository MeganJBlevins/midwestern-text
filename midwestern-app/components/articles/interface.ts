export interface Article {
  id: number,
  title: String,
  body: String,
  image: String
}
export interface IProps {

}

export interface IState {
  articles: Array<Article>

}
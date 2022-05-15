import articleStyle from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'

const ArticlesList = ({articles}) => {
    return (
        // <div className={articleStyles.grid}>
        //     {articles.map(article => (
        //         <h3>{article.title.toUpperCase()}</h3>
        //     ))}
        // </div>

        <div className={articleStyle.grid}>
            {articles.map((article) => (
                <ArticleItem key={Math.random()} article={article} />
        ))}
        </div>
    );
}

export default ArticlesList;

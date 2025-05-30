import ArticleList from "@/components/shared/article/article-list";
import { getArticles } from "@/lib/actions/article.actions";

const Blog = async () => {
  const article = await getArticles();
  return (
    <div>
      <ArticleList data={article}></ArticleList>
    </div>
  );
};

export default Blog;

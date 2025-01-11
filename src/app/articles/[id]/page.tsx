import { articles } from "@/lib/articles";
import ArticleContent from "./article-content";

export const generateStaticParams = () => {
  return articles.map((article) => ({
    id: article.id,
  }));
};

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleContent article={article} />;
}

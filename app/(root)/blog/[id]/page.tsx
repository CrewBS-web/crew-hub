import NotFoundPage from "@/app/not-found";
import BackButton from "@/components/ui/back-button";
import ImageViewer from "@/components/ui/images-viewer";

import { getArticleById } from "@/lib/actions/article.actions";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { id } = await params;

  const article = await getArticleById(id);

  if (!article) return <NotFoundPage />;

  return (
    <div>
      <BackButton />
      <div className="max-w-3xl mx-auto p-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-2xl font-bold mb-16">{article.title}</h1>
            <ImageViewer images={article.images} />
          </div>
        </div>
        <p className="text-md">{article.text}</p>
      </div>
    </div>
  );
};

export default ArticlePage;

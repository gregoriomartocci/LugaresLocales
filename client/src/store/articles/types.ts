export interface Article {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ArticleState {
    articles: Article[];
    selectedArticle: Article | null;
    loading: boolean;
    error: string | null;
  }
  
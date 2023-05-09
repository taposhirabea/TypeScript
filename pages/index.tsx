import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import NewsArticleEntry from '@/components/NewsArticleEntry'
import NewsArticlesGrid from '@/components/NewsArticlesGrid'

const inter = Inter({ subsets: ['latin'] })

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json()
  return {
    props: { newsArticles: newsResponse.articles}
  }
}

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking news</title>
      </Head>
      <main >
        <h1>Breaking news</h1>
        {/* {JSON.stringify(newsArticles)} */}
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  )
}

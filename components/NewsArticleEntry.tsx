import { NewsArticle } from "@/models/NewsArticles";
import { Card } from "react-bootstrap"
import styles from "../styles/NewsArticleEntry.module.css";
import Image from "next/image";
import placeholderImage from '../assets/images/newsarticle_placeholder.jpg'

interface NewsArticleEntryProps {
    article: NewsArticle,
}

const NewsArticleEntry = ({ article: {title, description, author, url, urlToImage, content} }: NewsArticleEntryProps) => {

    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined;
    return ( 
        <a href={url}>
        <Card className='h-100'>
            <Image
                src={validImageUrl || placeholderImage}
                width={500}
                height={200}
                alt="News article image"
                className={`card-img-top ${styles.image}`}
            />
            <Card.Body >
                <Card.Title>{author}</Card.Title>
                <Card.Title >{title}</Card.Title>
            </Card.Body>
        </Card>

    </a>


     );
}
 
export default NewsArticleEntry;
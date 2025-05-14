
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

interface ClickableNewsCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  image: string;
  featured?: boolean;
}

const ClickableNewsCard = ({ id, title, description, category, date, time, image, featured = false }: ClickableNewsCardProps) => {
  return (
    <Link to={`/article/${id}`} className="block transition-transform hover:-translate-y-1">
      <NewsCard
        title={title}
        description={description}
        category={category}
        date={date}
        time={time}
        image={image}
        featured={featured}
      />
    </Link>
  );
};

export default ClickableNewsCard;

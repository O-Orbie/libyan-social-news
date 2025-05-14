
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  image: string;
  featured?: boolean;
}

const NewsCard = ({ title, description, category, date, time, image, featured = false }: NewsCardProps) => {
  return (
    <Card className={`overflow-hidden h-full transition-transform hover:shadow-lg ${featured ? 'hover:-translate-y-2' : 'hover:-translate-y-1'}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="px-4 md:px-6 pb-0">
        <h3 className={`font-bold line-clamp-2 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="px-4 md:px-6 py-3">
        <p className="text-gray-600 line-clamp-2 text-sm md:text-base">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="px-4 md:px-6 pt-0 flex justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{time}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;


import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="py-12 bg-white" id="about">
      <div className="news-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">من نحن</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>ليبيا نيوز</strong> هي منصة إخبارية ليبية مستقلة تهدف إلى تقديم أخبار موثوقة وتغطية شاملة للأحداث في ليبيا والعالم العربي.
              </p>
              <p>
                تأسست المنصة عام 2023، ونسعى جاهدين لضمان الدقة والمصداقية والتوازن في تقديم المحتوى الإخباري.
              </p>
              <p>
                نلتزم بتغطية كافة المجالات من السياسة، والاقتصاد، والرياضة، والفنون، والثقافة، مع التركيز على القضايا المهمة التي تؤثر على المجتمع الليبي.
              </p>
              
              <div className="pt-2">
                <h3 className="font-bold text-lg mb-2">اتصل بنا</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>طرابلس، ليبيا</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={18} className="text-primary" />
                    <span>+218 12 345 6789</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={18} className="text-primary" />
                    <span>info@libyanews.com</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button>تواصل معنا</Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1631123327880-a37e1023e5ca?auto=format&fit=crop&q=80&w=1000" 
              alt="Libya News Office" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

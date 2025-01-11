
import { Card } from "@/components/ui/card";
import { articles } from "@/lib/articles";

import { formatDistanceToNow } from "date-fns";
import { BookOpen, BookText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Categories from "./_components/categories";

export default function Articles(){
     return (
       <div className="relative w-screen min-h-max flex flex-col items-center justify-center gap-20 py-12 px-[7.5%]">
         <div className="container mx-auto px-4 py-8 ">
           <header className="mb-12 text-center">
             <h2 className="font-semibold text-3xl text-center text-black mt-12">
               Islamic Articles
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Explore insightful articles about Islam, faith, and spirituality
             </p>
           </header>

           <section className="flex items-start justify-between gap-6">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
               {articles.map((article) => (
                 <Link key={article.id} href={`/articles/${article.id}`}>
                   <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                     <div className="relative h-48">
                       <Image
                         src={article.coverImage}
                         alt={article.title}
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="p-6">
                       <div className="flex items-center gap-2 mb-4">
                         <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                           {article.category}
                         </span>
                         <span className="text-sm text-muted-foreground">
                           {formatDistanceToNow(new Date(article.publishedAt), {
                             addSuffix: true,
                           })}
                         </span>
                       </div>
                       <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                         {article.title}
                       </h2>
                       <p className="text-muted-foreground mb-4 line-clamp-2">
                         {article.excerpt}
                       </p>
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <Image
                             src={article.author.avatar}
                             alt={article.author.name}
                             width={32}
                             height={32}
                             className="rounded-full"
                           />
                           <span className="text-sm font-medium">
                             {article.author.name}
                           </span>
                         </div>
                         <div className="flex items-center gap-1 text-muted-foreground">
                           <BookOpen className="w-4 h-4" />
                           <span className="text-sm">
                             {article.readingTime}
                           </span>
                         </div>
                       </div>
                     </div>
                   </Card>
                 </Link>
               ))}
             </div>
             <Categories />
           </section>
         </div>
       </div>
     );
}
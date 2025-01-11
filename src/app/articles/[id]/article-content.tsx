"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type Article } from "@/lib/articles";
import { formatDistanceToNow } from "date-fns";
import { BookOpen, Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ArticleContent({ article }: { article: Article }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
    const [isClient, setIsClient] = useState(false); // Track if we are in the client

    useEffect(() => {
      setIsClient(true); // Set to true when the component mounts
    }, []);

  const handleShare = async () => {
    if (isClient && navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium">{article.author.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <time>
                  {formatDistanceToNow(new Date(article.publishedAt), {
                    addSuffix: true,
                  })}
                </time>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share Article</DialogTitle>
                <DialogDescription>
                  Share this article with your friends and family
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Button onClick={handleShare} className="w-full">
                  Share via Device
                </Button>
                <Input
                  readOnly
                  value={isClient ? window.location.href : ""}
                  onClick={(e) => e.currentTarget.select()}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-6">
          {article.title}
        </h1>
        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-2 mt-6">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="my-12" />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Share your thoughts..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                />
              </div>
              <Button type="submit">Post Comment</Button>
            </form>
          </Card>
        </section>
      </article>
    </div>
  );
}

import { categories } from "@/lib/categories";
import { BookOpen, BookText } from "lucide-react";

import { Card } from "@/components/ui/card";
import Link from "next/link";
export default function Categories() {
  return (
    <>
      {/* Categories sidebar */}
      <div className="sticky top-[10%] w-72 shrink-0 ">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BookText className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Categories</h2>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/categories/${category.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>
          </Card>
      </div>
    </>
  );
}

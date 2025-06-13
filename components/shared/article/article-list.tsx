"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { Article } from "@/types";

import { motion } from "framer-motion";

interface ArticleListProps {
  data: Article[];
}

const ArticleList = ({ data }: ArticleListProps) => {
  return (
    <div className="my-10">
      <h2 className="h3-bold mb-4 font-semibold">Блог:</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((article) => (
          <motion.div
            key={article.id}
            className="h-full w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={`/blog/${article.id}`}
              className={clsx(
                "group flex h-full flex-col rounded-xl border border-border bg-background transition-all duration-300",
                "border-2 border-black dark:border-white"
              )}
            >
              <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={`${article.images[1]}.jpg`}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;

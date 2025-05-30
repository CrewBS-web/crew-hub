"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

interface ImageViewerProps {
  images: string[];
}

const ImageViewer = ({ images }: ImageViewerProps) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      {images.slice(0, 3).map((src, index) => (
        <Dialog key={index}>
          <DialogTitle className="hidden">{activeImage}</DialogTitle>
          <DialogTrigger asChild>
            <div
              onClick={() => setActiveImage(src)}
              className={`
            cursor-pointer rounded overflow-hidden shadow hover:scale-105 transition-transform
            ${index === 0 ? "row-span-2 h-full" : "h-full"}
          `}
            >
              <Image
                src={`${src}.jpg`}
                alt={`Image ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <Image
              src={`${src}.jpg`}
              alt={`Large image ${index + 1}`}
              width={1000}
              height={700}
              className="w-full h-auto object-contain rounded"
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ImageViewer;

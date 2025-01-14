import * as React from 'react';
import { cn } from '../../lib/utils';
import Image from 'next/image';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-lg border bg-white shadow-lg transition-transform duration-300 ease-in-out', className)}
      {...props}
    />
  )
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col p-4 border-b', className)} {...props} />
  )
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-lg font-bold text-gray-800', className)} {...props} />
  )
);

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-gray-500', className)} {...props} />
  )
);

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-between p-4 border-t', className)} {...props} />
  )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter };

// Product Card Section
interface ProductCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    price: string;
    imgURL: string;
  };
}

export default function ProductCard({ post }: ProductCardProps) {
  return (
    <Card className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
      <Image
        src={post.imgURL}
        alt={post.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold text-center">{post.title}</CardTitle>
        <p className="text-sm mt-2 text-center">{post.description}</p>
        <p className="font-semibold mt-2 text-center">{post.price}</p>
      </CardContent>

      <div className="flex justify-center p-4">
        <a
          href={`/product/${post.id}`}
          className="px-6 py-2 text-sm font-medium rounded transition-color"
        >
          View Collection
        </a>
      </div>
    </Card>
  );
}

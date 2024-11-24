import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the props interface for the CategoryCard component
interface CategoryCardProps {
  image: string;
  title: string;
  link: string;
}

// Define the CategoryCard functional component using React.FC with the props interface
const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, link }) => {
  return (
    <div className="w-60 h-80 flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-2/3">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="w-full h-full object-cover" />
      </div>
      <div className="bg-yellow w-full p-4 flex justify-between items-center h-1/3">
        <h2 className="text-black">{title}</h2>
        <Link href={link}>
        <button className="inline-flex items-center justify-center bg-black w-20 h-10 rounded-full text-white hover:bg-white hover:text-black">
          →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;

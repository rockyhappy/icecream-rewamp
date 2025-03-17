'use client';

import { BlogPost } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="blog-post-card">
      <div className="position-relative" style={{ height: '200px' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="blog-post-image"
        />
      </div>
      <div className="blog-post-info">
        <h3 className="blog-post-title">{post.title}</h3>
        <div className="blog-post-meta">
          <span>{post.date}</span>
          <span>By {post.author}</span>
        </div>
        <p className="blog-post-excerpt">{post.excerpt}</p>
        <div className="blog-post-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${post.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard; 
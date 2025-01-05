import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '../data/blogPosts';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(BLOG_DIR);
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        ...data,
        slug: file.replace('.md', ''),
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { BlogPost, BlogCategory } from '../types/index';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryNav = styled.nav`
  margin-bottom: 2rem;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.active ? '#e85d13' : '#f1f1f1'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#e85d13' : '#e0e0e0'};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
`;

const BlogMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: #444;
  line-height: 1.5;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: #f1f1f1;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
`;

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.tags.includes(selectedCategory));

  return (
    <>
      <Header />
      <BlogContainer>
        <BlogHeader>
          <h1>
            <i className="fa-regular fa-newspaper" /> Mexican Culinary Blog
          </h1>
          <p>Exploring the rich traditions and flavors of Mexican cuisine</p>
        </BlogHeader>

        <CategoryNav>
          <CategoryList>
            <li>
              <CategoryButton
                active={selectedCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
              >
                All Posts
              </CategoryButton>
            </li>
            {blogCategories.map((category) => (
              <li key={category.id}>
                <CategoryButton
                  active={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </CategoryButton>
              </li>
            ))}
          </CategoryList>
        </CategoryNav>

        <BlogGrid>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id}>
              <BlogImage src={post.imageUrl} alt={post.title} />
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogMeta>
                  <span>{post.author}</span> • <span>{new Date(post.date).toLocaleDateString()}</span>
                </BlogMeta>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <TagList>
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagList>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default BlogPage;

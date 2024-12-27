'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';


const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id} // _id is a default field in MongoDB, which acts as a unique identifier for each documentmnnmnmm 
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
};


const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
      setFilteredPosts(data);
    }

    fetchPosts();
  },[]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    filterPosts(e.target.value);
  };

  const filterPosts = (searchText) => {
    const filtered = posts.filter(post => 
      (post.creator.username && post.creator.username.includes(searchText)) ||
      (post.prompt && post.prompt.includes(searchText)) ||
      (post.tag && post.tag.includes(searchText))
    );
    setFilteredPosts(filtered);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList 
        data={filteredPosts}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;

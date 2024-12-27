// 'use client';

// import { useState, useEffect } from 'react';
// import PromptCard from './PromptCard';
// import Prompt from '@models/prompt';

// const PromptCardList = ({data, handleTagClick}) => {
//   return (
//     <div className='mt-16 prompt_layout'>
//       {data.map((post) => (
//         <PromptCard
//           key={post._id}
//           prompt={post.prompt}
//           handleTagClick={handleTagClick}
//         />
//       ))}
//     </div>
//   )
// };


// const Feed = () => {

//   const [searchText, setSearchText] = useState('');
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch('/api/prompt');
//       const data = await response.json();

//       setPosts(data);
//     }

//     fetchPosts();
//   },[]);

//   const handleSearchChange = (e) => {
//     // ...existing code...
//   };

//   return (
//     <section className="feed">
//       <form className="relative w-full flex-center">
//         <input
//           type="text"
//           placeholder="Search for a tag or a username"
//           value={searchText}
//           onChange={handleSearchChange}
//           required
//           className="search_input peer"
//         />
//       </form>

//       <PromptCardList 
//         data={posts}
//         handleTagClick={() => {}}



//       />
//     </section>
//   );
// };

// export default Feed;


import React from 'react'

const Feed = () => {
  return (
    <div>
      feed
    </div>
  )
}

export default Feed

import React from 'react'
import Article from '.././components/Article';

const Blog = () => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8"> 
     
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
  
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
      </div>
  
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
       
      <Article></Article>
       <Article></Article>
      <Article></Article>
       <Article></Article>
      </div>
    </div>
  </section>
  
  )
}

export default Blog

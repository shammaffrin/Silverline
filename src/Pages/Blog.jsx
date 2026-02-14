import React from 'react'
import NewsArticles from '../Components/News'
import BlogBanner from '../Components/BlogBanner'
import GallerySection from '../Components/Gallery'
import Footer from '../Components/Footer'

const Blog = () => {
  return (
    <div>
      <BlogBanner/>
      <NewsArticles/>
      <GallerySection/>
      <Footer/>
    </div>
  )
}

export default Blog
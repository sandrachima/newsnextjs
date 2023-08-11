import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import { fetchNews } from './api/utils';
const inter = Inter({ subsets: ['latin']});



export default function App ({Component, pageProps}:AppProps) {



 const App = () => {}
        const [news, setNews] = useState([]);
      
        const handleSearch = async (query: string) => {
          const articles = await fetchNews(query);
          setNews(articles);
        }
    
       
      
      

return (
<div>

   

<div className="container mx-auto p-4">
<h1 className="text-2xl font-bold mb-4">Latest News Search</h1>
<SearchBar onSearch={handleSearch} />
<NewsList news={news} />
</div>
</div>
); 

}
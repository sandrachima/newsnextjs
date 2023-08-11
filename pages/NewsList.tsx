// components/NewsList.tsx
const NewsList = ({ news}) => {
    return (
    
    <div className="mt-5 ">
        {news.map((article) => (
           

  <div key={article.title} className="border  p-4 mb-4 border-white shadow-2xl bg-black-500 rounded-lg flex-2 hover:scale-1.1 delay-5s transition-all ">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <img src={article.urlToImage} className="w-420 h-40 ml-3" />
            <p className="text-gray-600">{article.description}</p>
            <a href={article.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Read more </a>
            </div>
        ))}
      </div>
    );
  };
  
  export default NewsList;
  
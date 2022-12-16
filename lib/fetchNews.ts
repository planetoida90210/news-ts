const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {};

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=7795b7f06bde4dfab5195816c807677d&sources=business,sports
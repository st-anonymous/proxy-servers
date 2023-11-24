import axios from "axios";

const news = async (req, res) => {
  try {
    const { query } = req;
    const page = query.page;
    const options = {
      method: "GET",
      url: page
        ? `https://newsapi.org/v2/everything?q=india&page=${page}&pageSize=100`
        : `https://newsapi.org/v2/top-headlines?country=in&pageSize=100`,
      headers: {
        "x-api-key": "b6684226df7948ddb6df5ad210a9c9dd",
      },
    };
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default news;

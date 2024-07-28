import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
    params: { q: query, per_page: '10', page: '1' },
    headers: {
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com',
      'x-rapidapi-key': 'bc22f11f37mshcbe9e742a1ed8cap1c4dbcjsna5ccd20c55bc'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lyrics' });
  }
}

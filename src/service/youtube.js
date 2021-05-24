import axios from 'axios';

class Youtube {
  constructor(key) {
    this.key = key;
  }

  async mostPopular() {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`
    );
    const { items } = res.data;
    return items;
  }

  async search(query) {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`
    );
    const { data } = res;
    const items = data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  }
}

export default Youtube;

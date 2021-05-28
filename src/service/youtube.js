class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const res = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    const { items } = res.data;
    return items;
  }

  async search(query) {
    const res = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
        type: 'videos',
      },
    });
    const { data } = res;
    const items = data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  }
}

export default Youtube;

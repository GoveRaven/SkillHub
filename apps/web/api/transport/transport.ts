export class Transport {
  get(url: string) {
    return this.request(url);
  }

  private async request(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const { data } = await response.json();
    return data;
  }
}

export class Transport {
  constructor(private readonly endpoint: string) {}

  private readonly baseURL = 'http://localhost:1337/api';

  get(path: string = '') {
    return this.request(path);
  }

  private async request(path: string) {
    const url = `${this.baseURL}${this.endpoint}${path}`;
    console.log(url);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const { data } = await response.json();
    return data;
  }
}

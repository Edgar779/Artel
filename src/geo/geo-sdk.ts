import axios from 'axios';

export class GeoSDK {
  constructor(private readonly baseUrl: string) {}

  async getGeoInfo(ip: string): Promise<{ lat: string; lng: string; country: string; city: string }> {
    try {
      const response = await axios.get(`${this.baseUrl}/?ip=${ip}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('No data for this IP');
      } else if (error.response && error.response.status === 400) {
        throw new Error('Invalid IP format');
      } else {
        throw new Error('Server error');
      }
    }
  }
}
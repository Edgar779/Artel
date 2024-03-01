import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import {
  GeoDTO,
} from "./dto";
import { GeoModel } from "./geo.model";
import { IGeo } from "./interface";
import * as geoip from 'geoip-lite';

@Injectable()
export class GeoService {
  constructor() {
    this.model = GeoModel;
  }
  //The Model
  private model: Model<IGeo>;

  /************************** Service API *************************/
  /** Create a new book */
  async getGeoInfo(ip: string): Promise<any> {
    try {
      return new Promise((resolve, reject) => {
        const geo = geoip.lookup(ip);
        if (!geo) {
          reject(new HttpException("No data for this IP", HttpStatus.NOT_FOUND));
        } else if (!geo.ll || !geo.country || !geo.city) {
          reject(new HttpException("Invalid data", HttpStatus.BAD_REQUEST));
        } else {
          resolve({ lat: geo.ll[0].toString(), lng: geo.ll[1].toString(), country: geo.country, city: geo.city });
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
//End of Service

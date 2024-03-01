import {
  Controller,
  Get,
  Query,
  Res,
} from "@nestjs/common";
import { ApiHeader, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ACCESS_TOKEN, ParseObjectIdPipe, Public } from "src/util";
import {
  GeoDTO,
} from "./dto";
import { GeoService } from "./geo.service";
import { Response } from "express";

@Controller("geo")
@ApiTags("Geo Endpoints")
@ApiHeader({ name: ACCESS_TOKEN })
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  /** Get the geo */
  @Get()
  // @ApiBody({ type: CreateGeoDTO })
  @ApiOkResponse({ type: GeoDTO })
  async create(@Query('ip') ip: string): Promise<any> {
    const geoInfo = await this.geoService.getGeoInfo(ip);
    return geoInfo;
  }

}
/** End of Controller */

import { Module } from "@nestjs/common";
import { GeoController } from "./geo.controller";
import { GeoService } from "./geo.service";

@Module({
  exports: [GeoService],
  providers: [GeoService],
  controllers: [GeoController],
})
export class GeoModule {}

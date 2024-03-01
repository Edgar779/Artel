import { ApiProperty } from "@nestjs/swagger";

export class GeoDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  lat: string;
  @ApiProperty()
  lng: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  city: string;
}

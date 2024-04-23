import { ApiProperty } from '@nestjs/swagger';

export class ElementDTO {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  props!: object;
}

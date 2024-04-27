import type { IPage, IPageConstructorOptions } from '@colibrijs/types';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pages' })
export class PageDTO implements IPage {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @Column({ nullable: false })
  @ApiProperty()
  route!: string;
}

export class PageConstructorOptions
  extends OmitType(PageDTO, ['id'])
  implements IPageConstructorOptions {}

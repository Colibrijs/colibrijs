import type { IElement, IElementConstructorOptions } from '@colibrijs/types';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ComponentDTO } from '../components';
import { PageDTO } from '../pages';

@Entity({ name: 'elements' })
export class ElementDTO implements IElement {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @ManyToOne(() => ComponentDTO, { eager: true, nullable: false })
  @ApiProperty()
  component!: ComponentDTO;

  @ManyToOne(() => PageDTO, { nullable: false })
  page?: PageDTO;

  @Column({ type: 'varchar', length: 40 })
  @ApiProperty()
  pageId!: string;

  @Column({ type: 'simple-json' })
  @ApiProperty()
  props!: object;
}

export class ElementConstructorOptions
  extends OmitType(ElementDTO, ['id'])
  implements IElementConstructorOptions {}

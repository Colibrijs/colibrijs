import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'components' })
export class ComponentDTO implements IComponent {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @Column({ nullable: false })
  @ApiProperty()
  componentName!: string;

  @Column({ nullable: false })
  @ApiProperty()
  libraryName!: string;

  @Column({ nullable: false })
  @ApiProperty()
  src!: string;
}

export class ComponentConstructorOptions
  extends OmitType(ComponentDTO, ['id'])
  implements IComponentConstructorOptions {}

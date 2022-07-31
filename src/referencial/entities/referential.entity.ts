import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Referential extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  label: string;

  @ApiProperty()
  @Column({ type: 'integer' })
  agreement: number;
}

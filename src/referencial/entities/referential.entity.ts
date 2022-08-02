import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Cotation } from 'src/cotation/entities/cotation.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Referential extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  label: string;

  @ApiProperty()
  @Column({ type: 'integer' })
  agreement: number;

  @ApiProperty()
  @OneToMany(() => Cotation, (cotation) => cotation.referential)
  cotations: Cotation[];
}

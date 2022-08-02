import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Cotation } from 'src/cotation/entities/cotation.entity';
import { KeyLetter } from 'src/key-letter/entities/key-letter.entity';
import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Ngap extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  label: string;

  @ApiProperty()
  @Column({ type: 'float', nullable: false })
  value: number;

  @ApiProperty()
  @ManyToOne(() => KeyLetter, (keyLetter) => keyLetter.ngaps)
  keyLetter: KeyLetter;

  @ManyToMany(() => Cotation, (cotation) => cotation.ngaps)
  cotations: Cotation[];

  //   @ManyToMany(() => Prescription, (prescription) => prescription.cotations)
  //   prescriptions: Prescription[];
}

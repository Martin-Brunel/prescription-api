import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Role } from 'src/enums/roles.enum';
import { KeyLetter } from 'src/key-letter/entities/key-letter.entity';
import { Prescription } from 'src/prescription/entities/precription.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  AfterLoad,
  BeforeInsert,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Ngap extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  label: string;

  @ApiProperty()
  @Column({ type: 'float', nullable: false })
  value: number;

  @ManyToOne(() => KeyLetter, (keyLetter) => keyLetter.ngaps)
  keyLetter: KeyLetter;

  //   @ManyToMany(() => Prescription, (prescription) => prescription.cotations)
  //   prescriptions: Prescription[];
}

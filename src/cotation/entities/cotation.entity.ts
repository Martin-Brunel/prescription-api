import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Role } from 'src/enums/roles.enum';
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
export class Cotation extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'boolean', nullable: false })
  isNbSeances: boolean;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: false })
  isAms: boolean;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: false })
  isAmk: boolean;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  cotation: string;

  @ManyToOne(() => User, (user) => user.cotations)
  createdBy: User;

  @ManyToMany(() => Prescription, (prescription) => prescription.cotations)
  prescriptions: Prescription[];
}

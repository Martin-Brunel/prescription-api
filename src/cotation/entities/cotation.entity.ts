import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Role } from 'src/enums/roles.enum';
import { Ngap } from 'src/ngap/entities/ngap.entity';
import { Prescription } from 'src/prescription/entities/precription.entity';
import { Referential } from 'src/referencial/entities/referential.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne, ManyToMany, JoinTable, Column } from 'typeorm';

@Entity()
export class Cotation extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'int', nullable: true })
  nbAppointment: number;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: false, default: false })
  isDomicile: boolean;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: false, default: false })
  isBalneo: boolean;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  explain: string;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.cotations)
  createdBy: User;

  @ApiProperty()
  @ManyToOne(() => Prescription, (prescription) => prescription.cotations)
  prescription: Prescription;

  @ApiProperty()
  @ManyToOne(() => Referential, (referential) => referential.cotations)
  referential: Referential;

  @ApiProperty({ type: () => Ngap, isArray: true })
  @ManyToMany(() => Ngap, (ngap) => ngap.cotations)
  @JoinTable()
  ngaps: Ngap[];
}

import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Cotation } from 'src/cotation/entities/cotation.entity';
import { Role } from 'src/enums/roles.enum';
import { Ngap } from 'src/ngap/entities/ngap.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class Prescription extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  label: string;

  @ApiProperty()
  @Column({ type: 'text' })
  sanitize: string;

  @ManyToOne(() => User, (user) => user.prescriptions)
  user: User;

  @OneToMany(() => Cotation, (cotation) => cotation.prescription)
  cotations: Cotation[];
}

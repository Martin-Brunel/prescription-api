import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Cotation } from 'src/cotation/entities/cotation.entity';
import { Role } from 'src/enums/roles.enum';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, ManyToOne, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Prescription extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  label: string;

  @ManyToOne(() => User, (user) => user.prescriptions)
  user: User;

  @ManyToMany(() => Cotation, (cotation) => cotation.prescriptions)
  @JoinTable()
  cotations: Cotation[];
}

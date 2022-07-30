import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Role } from 'src/enums/roles.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  AfterLoad,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class Prescription extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'text' })
  label: string;
}

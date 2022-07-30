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
export class User extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @ApiProperty()
  @Column('varchar', { default: '["user"]' })
  roles: string;

  @AfterLoad()
  getRoles() {
    this.roles = JSON.parse(this.roles);
  }

  @BeforeInsert()
  stringifyRoles() {
    this.roles = JSON.stringify(this.roles);
  }
}

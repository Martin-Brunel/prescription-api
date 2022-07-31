import { ApiProperty } from '@nestjs/swagger';
import { Ngap } from 'src/ngap/entities/ngap.entity';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class KeyLetter {
  @ApiProperty()
  @PrimaryColumn({ type: 'varchar', nullable: false })
  id: string;

  @ApiProperty()
  @Column({ type: 'float', nullable: false })
  value: number;

  @OneToMany(() => Ngap, (ngap) => ngap.keyLetter)
  ngaps: Ngap;

  @ApiProperty()
  @Column({ default: false })
  is_deleted: boolean;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @DeleteDateColumn()
  deleted_at: Date;

  //   @ManyToOne(() => User, (user) => user.cotations)
  //   createdBy: User;

  //   @ManyToMany(() => Prescription, (prescription) => prescription.cotations)
  //   prescriptions: Prescription[];
}

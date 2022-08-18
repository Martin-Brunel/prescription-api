import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  AfterLoad,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lexique {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  ortho: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  phon: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  lemme: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  cgram: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  genre: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @ApiProperty()
  @Column({ type: 'double', nullable: false })
  freqlemfilms2: number;

  @ApiProperty()
  @Column({ type: 'double', nullable: false })
  freqlemlivres: number;

  @ApiProperty()
  @Column({ type: 'double', nullable: false })
  freqfilms2: number;

  @ApiProperty()
  @Column({ type: 'double', nullable: false })
  freqlivres: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  infover: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  phonrenv: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  nbhomogr: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  nbhomoph: number;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: false })
  islem: boolean;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  nblettres: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  nbphons: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  cvcv: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  p_cvcv: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  voisorth: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  voisphon: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  puorth: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  puphon: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  syll: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  nbsyll: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  'cv-cv': string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  orthrenv: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  orthosyll: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  cgramortho: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  deflem: number;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  defobs: number;

  @ApiProperty()
  @Column({ type: 'double', nullable: false })
  old20: number;

  @ApiProperty()
  @Column({ type: 'double', nullable: false })
  pld20: number;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  morphoder: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  nbmorph: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/baseEntity/baseEntity.entity';
import { Cotation } from 'src/cotation/entities/cotation.entity';
import { KeyLetter } from 'src/key-letter/entities/key-letter.entity';
import { Lexique } from 'src/lexique/entities/lexique.entity';
import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Dictionary extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false, unique: true })
  label: string;

  @ApiProperty()
  @Column({ type: 'varchar', default: null })
  translation: string;

  @ManyToOne(() => Lexique)
  lexique: Lexique;

  @ApiProperty()
  @Column({ nullable: true })
  lexiqueId: number;
}

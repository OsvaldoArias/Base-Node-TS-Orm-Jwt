import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { manyToOneExample } from './manyToOneExample'

@Entity()
export class oneToManyExample {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'mediumtext' })
  mediumtext: string

  @OneToMany(() => manyToOneExample, (data) => data.procediminetos)
  table: manyToOneExample[]
}

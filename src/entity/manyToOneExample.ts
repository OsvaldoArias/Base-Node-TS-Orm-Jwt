import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { oneToManyExample } from './oneToManyExample'
@Entity()
export class manyToOneExample {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  varchar: string

  @Column({ type: 'bigint' })
  bigint: BigInteger

  @Column({ type: 'int' })
  int: number

  @Column({ type: 'boolean' })
  boolean: boolean

  @ManyToOne(() => oneToManyExample, (data) => data.productos, {
    nullable: true,
  })
  foreignkey: number
}

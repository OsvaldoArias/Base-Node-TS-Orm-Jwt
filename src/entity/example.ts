import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Example {
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
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Min, IsEmail } from 'class-validator'
import bcrypt from 'bcrypt'
@Entity()
@Unique(['username'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  @Min(6)
  @IsEmail()
  username: string

  @Column({ type: 'varchar' })
  @Min(6)
  password: string

  @Column({ type: 'date' })
  @CreateDateColumn()
  createAt: Date

  @Column({ type: 'date' })
  @UpdateDateColumn()
  updateAt: Date

  hasPassword(): void {
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)
  }
  checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
  }
}

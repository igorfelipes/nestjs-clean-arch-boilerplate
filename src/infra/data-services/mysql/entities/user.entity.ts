import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity({
  name: 'users'
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    unique: true
  })
  email: string

  @Column()
  phone: string

  @Column()
  password: string

  @Column({
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt: Date
  // Relationships

  // @OneToMany(() => Purchase, purchase => purchase.customer)
  // purchases: Purchase[];
}

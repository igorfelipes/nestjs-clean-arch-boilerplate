import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity({
  name: 'users'
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  password: string

  // Relationships

  // @OneToMany(() => Purchase, purchase => purchase.customer)
  // purchases: Purchase[];
}

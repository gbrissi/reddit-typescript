//import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Field, ObjectType } from "type-graphql";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  //[OptionalProps]?: 'updatedAt' | 'createdAt'; 

  @Field()
  @PrimaryGeneratedColumn()
  id!: number; 

  @Field(() => String)
  @CreateDateColumn()
  createdAt = Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date;

  @Field()
  @Column({unique: true})
  username!: string;

  @Field()
  @Column({unique: true})
  email!: string;
  
  @Column()
  password!: string;

  @OneToMany(() => Post, post => post.creator)
    posts: Post[]
  
}
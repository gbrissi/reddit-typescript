//import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
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
  @Column()
  title!: string;
  
}
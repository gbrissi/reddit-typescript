import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
  [OptionalProps]?: 'updatedAt' | 'createdAt'; 

  @PrimaryKey()
  id!: number; // string is also supported

  @Property({type: 'date'})
  createdAt: Date = new Date();

  @Property({type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({type: 'text'})
  title!: string;

}
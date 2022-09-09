import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
  [OptionalProps]?: "title" | "updateAt" | "createdAt";

  @PrimaryKey()
  id!: number; // string is also supported

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  title!: string;

}
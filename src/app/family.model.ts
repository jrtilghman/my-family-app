import { Person } from "./person.model";

export interface Family extends Person {
  relationship: string;
}

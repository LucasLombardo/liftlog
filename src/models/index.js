// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Workout, SetGroup, Set, Excercise, Category } = initSchema(schema);

export { Workout, SetGroup, Set, Excercise, Category };

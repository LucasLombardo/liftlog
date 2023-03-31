// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Category, Excercise, Set, SetGroup, Workout } = initSchema(schema);

export { Category, Excercise, Set, SetGroup, Workout };

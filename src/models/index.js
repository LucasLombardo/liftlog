// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Set, Excercise, Workout } = initSchema(schema);

export { Set, Excercise, Workout };

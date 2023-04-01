// eslint-disable-next-line no-path-concat
require("dotenv").config({ path: __dirname + "/.env" });
const seedData = require("./data");

const { API_KEY, API_ENDPOINT } = process.env;

const getFetchParams = (query) => [
  API_ENDPOINT,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({ query, variables: {} }),
  },
];

(async () => {
  const seedCategories = await fetch(
    ...getFetchParams(`
      mutation SEED_CATEGORIES {
        ${seedData.categories.map((cat) => {
          return `${cat.name}: createCategory(input: { name: "${cat.name}"}) { id }\n`;
        })}
      }
    `)
  );
  const categories = await seedCategories.json();
  console.log("seeded categories:");
  console.log(categories.data);

  const seedExcercises = await fetch(
    ...getFetchParams(`
      mutation SEED_EXCERCISES {
        ${seedData.excercises.map((ex, i) => {
          return `e${i}: createExcercise(input: { excerciseType: "${ex.type}", name: "${ex.name}" }) { id, name }\n`;
        })}
      }  
    `)
  );
  const excercises = await seedExcercises.json();
  console.log("seeded excercises:");
  console.log(excercises.data);

  const seedExcerciseCategories = await fetch(
    ...getFetchParams(`
    mutation SEED_EXCERCISE_CATEGORIES {
      ${Object.entries(excercises.data).map(([_key, ex], i) => {
        const { catagoryName } = seedData.excercises.find(
          (iex) => iex.name === ex.name
        );
        return `ec${i}: createExcerciseCategory(input: { categoryId: "${categories.data[catagoryName]}", excerciseId: "${ex.id}" }) { id }\n`;
      })}
    }  
  `)
  );

  const excerciseCategories = await seedExcerciseCategories.json();
  console.log("seeded excerciseCategories:");
  console.log(excerciseCategories);
})();

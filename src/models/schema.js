export const schema = {
  models: {
    Workout: {
      name: "Workout",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        date: {
          name: "date",
          isArray: false,
          type: "AWSDate",
          isRequired: false,
          attributes: [],
        },
        notes: {
          name: "notes",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        timeStarted: {
          name: "timeStarted",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        timeEnded: {
          name: "timeEnded",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        setGroups: {
          name: "setGroups",
          isArray: true,
          type: {
            model: "SetGroup",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["workoutID"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Workouts",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    SetGroup: {
      name: "SetGroup",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        notes: {
          name: "notes",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        sets: {
          name: "sets",
          isArray: true,
          type: {
            model: "Set",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["setgroupID"],
          },
        },
        workoutID: {
          name: "workoutID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        excerciseID: {
          name: "excerciseID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "SetGroups",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byWorkout",
            fields: ["workoutID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byExcercise",
            fields: ["excerciseID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Set: {
      name: "Set",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        seconds: {
          name: "seconds",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        distance: {
          name: "distance",
          isArray: false,
          type: "Float",
          isRequired: false,
          attributes: [],
        },
        distanceUnits: {
          name: "distanceUnits",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        weight: {
          name: "weight",
          isArray: false,
          type: "Float",
          isRequired: false,
          attributes: [],
        },
        weightUnits: {
          name: "weightUnits",
          isArray: false,
          type: "Float",
          isRequired: false,
          attributes: [],
        },
        reps: {
          name: "reps",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        setgroupID: {
          name: "setgroupID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Sets",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "bySetGroup",
            fields: ["setgroupID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Excercise: {
      name: "Excercise",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        excerciseType: {
          name: "excerciseType",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        notes: {
          name: "notes",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        setGroups: {
          name: "setGroups",
          isArray: true,
          type: {
            model: "SetGroup",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["excerciseID"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Excercises",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Category: {
      name: "Category",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Categories",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: "3.4.0",
  version: "37c7f278a8386fea4acc29d430ccdf57",
};

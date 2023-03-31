import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from "@aws-amplify/datastore";
// @ts-ignore
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
} from "@aws-amplify/datastore";

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name?: string | null;
  readonly excerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name?: string | null;
  readonly excerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Category = LazyLoading extends LazyLoadingDisabled
  ? EagerCategory
  : LazyCategory;

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(
    source: Category,
    mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void
  ): Category;
};

type EagerExcercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Excercise, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name?: string | null;
  readonly excerciseType?: string | null;
  readonly notes?: string | null;
  readonly SetGroups?: (SetGroup | null)[] | null;
  readonly Categories?: (SetGroup | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyExcercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Excercise, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name?: string | null;
  readonly excerciseType?: string | null;
  readonly notes?: string | null;
  readonly SetGroups: AsyncCollection<SetGroup>;
  readonly Categories: AsyncCollection<SetGroup>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Excercise = LazyLoading extends LazyLoadingDisabled
  ? EagerExcercise
  : LazyExcercise;

export declare const Excercise: (new (
  init: ModelInit<Excercise>
) => Excercise) & {
  copyOf(
    source: Excercise,
    mutator: (draft: MutableModel<Excercise>) => MutableModel<Excercise> | void
  ): Excercise;
};

type EagerSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly seconds?: number | null;
  readonly distance?: number | null;
  readonly distanceUnits?: string | null;
  readonly weight?: number | null;
  readonly weightUnits?: string | null;
  readonly reps?: number | null;
  readonly setgroupID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazySet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly seconds?: number | null;
  readonly distance?: number | null;
  readonly distanceUnits?: string | null;
  readonly weight?: number | null;
  readonly weightUnits?: string | null;
  readonly reps?: number | null;
  readonly setgroupID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Set = LazyLoading extends LazyLoadingDisabled
  ? EagerSet
  : LazySet;

export declare const Set: (new (init: ModelInit<Set>) => Set) & {
  copyOf(
    source: Set,
    mutator: (draft: MutableModel<Set>) => MutableModel<Set> | void
  ): Set;
};

type EagerSetGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SetGroup, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly notes?: string | null;
  readonly workoutID: string;
  readonly Sets?: (Set | null)[] | null;
  readonly excerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazySetGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SetGroup, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly notes?: string | null;
  readonly workoutID: string;
  readonly Sets: AsyncCollection<Set>;
  readonly excerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type SetGroup = LazyLoading extends LazyLoadingDisabled
  ? EagerSetGroup
  : LazySetGroup;

export declare const SetGroup: (new (init: ModelInit<SetGroup>) => SetGroup) & {
  copyOf(
    source: SetGroup,
    mutator: (draft: MutableModel<SetGroup>) => MutableModel<SetGroup> | void
  ): SetGroup;
};

type EagerWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly date: string;
  readonly notes?: string | null;
  readonly SetGroups?: (SetGroup | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly date: string;
  readonly notes?: string | null;
  readonly SetGroups: AsyncCollection<SetGroup>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Workout = LazyLoading extends LazyLoadingDisabled
  ? EagerWorkout
  : LazyWorkout;

export declare const Workout: (new (init: ModelInit<Workout>) => Workout) & {
  copyOf(
    source: Workout,
    mutator: (draft: MutableModel<Workout>) => MutableModel<Workout> | void
  ): Workout;
};

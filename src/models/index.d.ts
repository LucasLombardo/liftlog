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

type EagerSet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly excerciseID: string;
  readonly weight: number;
  readonly reps: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazySet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Set, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly excerciseID: string;
  readonly weight: number;
  readonly reps: number;
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

type EagerExcercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Excercise, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name: string;
  readonly workoutID: string;
  readonly category: string;
  readonly Sets?: (Set | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyExcercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Excercise, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name: string;
  readonly workoutID: string;
  readonly category: string;
  readonly Sets: AsyncCollection<Set>;
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

type EagerWorkout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workout, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly date: string;
  readonly Excercises?: (Excercise | null)[] | null;
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
  readonly Excercises: AsyncCollection<Excercise>;
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

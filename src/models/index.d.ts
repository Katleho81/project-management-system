import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEmployee = {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly username: string;
  readonly password: string;
  readonly role?: string | null;
  readonly capacity?: number | null;
  readonly line_manager?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly username: string;
  readonly password: string;
  readonly role?: string | null;
  readonly capacity?: number | null;
  readonly line_manager?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee, EmployeeMetaData>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}
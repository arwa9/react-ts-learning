import { Company } from "./company.interface";

export interface Job {
  title: string;
  company: Company;
  date: Date;
  contractType: ContractTypes;
  location: string;
  tags: string[];
}

export enum ContractTypes {
  PartTime = 'part time',
  FullTime = 'full time',
  Contract = 'contract'
}
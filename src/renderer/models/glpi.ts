/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import { Computer, ComputerModel, ComputerType } from './glpi/computer';
import { Entity } from './glpi/entity';
import { Group } from './glpi/group';
import { User } from './glpi/user';

export type truefalse = 0 | 1;
export type Links = [{ rel: string; href: string }];

export interface LoginResponse extends AxiosResponse {
  data: {
    session_token: string;
  };
}
export interface ComputerResponse extends AxiosResponse {
  data: Computer[];
}

export interface UserResponse extends AxiosResponse {
  data: User[];
}
export interface GroupResponse extends AxiosResponse {
  data: Group[];
}

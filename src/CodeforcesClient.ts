const randomstring = require("randomstring");
const CryptoJS = require( 'crypto-js');
//const axios = require('axios');
import axios from 'axios';
//import randomstring from 'randomstring';
//import CryptoJS from 'crypto-js';

import { ICodeforcesClient } from './interfaces/codeforces-client.interface';
import { sortObjectKeys } from './helpers/sortObjectKeys';

import { contest } from './modules/contest';

export class CodeforcesClient implements ICodeforcesClient {
  private _baseUrl: string;

  public contest = contest(this);

  public constructor(private key: string = '', private secret: string = '') {
    this._baseUrl = 'http://codeforces.com/api';
  }

  public async callMethod<U, V>(method: string, params: U): Promise<V> {
    const url = this.generateUrl(method, params);

    try {
      const { data } = await axios.get<V>(url);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  private generateUrl<U>(method: string, params: U): string {
    const randomStart =  randomstring.generate(6);
    const time = Math.round(Date.now() / 1000);
    const apiSigParamsObject = sortObjectKeys({ ...params, apiKey: this.key, time });
    const apiSig = this.generateApiSig(randomStart, method, apiSigParamsObject);
    return `${this._baseUrl}/${method}?${this.toParamsString(params)}&apiKey=${
      this.key
    }&time=${time}&apiSig=${randomStart}${apiSig}`;
  }

  private generateApiSig(randomStart: string, methodName: string, params: object): string {
    return CryptoJS.SHA512(`${randomStart}/${methodName}?${this.toParamsString(params)}#${this.secret}`).toString();
  }

  private toParamsString(params: any): string {
    return Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');
  }
}

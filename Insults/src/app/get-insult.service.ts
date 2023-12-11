import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetInsultService {

  constructor() { }

  async Insult(language : String, type : String) : Promise<String> {

    language = "en";
    type = "default";

    let ins = await axios.get('https://evilinsult.com/generate_insult.php?lang=' + language + '&type=' + type);

    return ins.data['insult'];
  }
}

import { Gender } from './gender';
import { Entity } from './entity';
import { City } from './city';
import { Photo } from './photo';

export interface User extends Entity {
    username: string;
    gender: Gender;
    genderId: number;
    knownAs: string;
    age: number;
    lastActivity: Date;
    city: City;
    cityId: number;
    photoUrl: string;
    introduction?: string;
    interestes?: string;
    lookingFor?: string;
    photos?: Photo[];
}

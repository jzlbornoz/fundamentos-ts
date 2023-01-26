import { Animal, Dog } from './inheritance';

const Koko = new Dog('koko', 'me');
Koko.owner;
Koko.woof(2);

/// const Jirafa = new Animal('jirafa'); -> No es permitido ya que Animal es abstracta

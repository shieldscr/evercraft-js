function Character() {
  var character = {
    name : 'Default Name',
    alignment : 'Neutral',
    validAlignments : ['Good', 'Evil', 'Neutral'],
    armorClass : 10,
    hp : 5,

    getName : getName,
    setName : setName,
    getAlignment : getAlignment,
    setAlignment : setAlignment,
    getArmorClass : getArmorClass,
    setArmorClass : setArmorClass,
    getHp : getHp,
    setHp : setHp,
    attack : attack,
    isDead : isDead };

  function getName() {
    return this.name;
  }

  function setName(name) {
    this.name = name;
  }

  function getAlignment() {
    return this.alignment;
  }

  function setAlignment(alignment) {
    if (this.validAlignments.indexOf(alignment) > -1) {
      this.alignment = alignment;
    }
  }

  function getArmorClass() {
    return this.armorClass;
  }

  function setArmorClass(armorClass) {
    this.armorClass = armorClass;
  }

  function getHp() {
    return this.hp;
  }

  function setHp(hp) {
    this.hp = hp;
  }

  function isDead() {
    if (this.hp <= 0) {
      return true;
    } else {
      return false;
    }
  }

  function attack(roll, opponent) {
    if (roll >= opponent.getArmorClass()) {
      if (roll === 20) {
        opponent.setHp(opponent.getHp()-2);
      } else {
        opponent.setHp(opponent.getHp()-1);
      }
      return true;
    } else {
      return false;
    }
  }

  return character;
};

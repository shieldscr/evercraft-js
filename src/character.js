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
    attack : attack };

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

  function attack(roll, opponent) {
    if (roll > opponent.getArmorClass()) {
      return true;
    } else {
      return false;
    }
  }

  return character;
};

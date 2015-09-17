function Character() {
  var character = {
    name : 'Default Name',
    alignment : 'Neutral',
    validAlignments : ['Good', 'Evil', 'Neutral'],
    armorClass : 10,
    hp : 5,
    strength : 10,
    dexterity : 10,
    constitution : 10,
    wisdom : 10,
    intelligence : 10,
    charisma : 10,

    setAlignment : setAlignment,
    getStrength : getStrength,
    setStrength : setStrength,
    getDexterity : getDexterity,
    setDexterity : setDexterity,
    getConstitution : getConstitution,
    setConstitution : setConstitution,
    getWisdom : getWisdom,
    setWisdom : setWisdom,
    getIntelligence : getIntelligence,
    setIntelligence : setIntelligence,
    getCharisma : getCharisma,
    setCharisma : setCharisma,
    attack : attack,
    isDead : isDead,
    getModifierForAbilityScore : getModifierForAbilityScore };

  function setAlignment(alignment) {
    if (this.validAlignments.indexOf(alignment) > -1) {
      this.alignment = alignment;
    }
  }

  function getStrength() {
    return this.strength;
  }

  function setStrength(strength) {
    this.strength = strength;
  }

  function getDexterity() {
    return this.dexterity;
  }

  function setDexterity(dexterity) {
    this.dexterity = dexterity;
  }

  function getConstitution() {
    return this.constitution;
  }

  function setConstitution(constitution) {
    this.constitution = constitution;
  }

  function getIntelligence() {
    return this.constitution;
  }

  function setIntelligence(intelligence) {
    this.intelligence = intelligence;
  }

  function getCharisma() {
    return this.charisma;
  }

  function setCharisma(charisma) {
    this.charisma = charisma;
  }

  function getWisdom() {
    return this.wisdom;
  }

  function setWisdom(wisdom) {
    this.wisdom = wisdom;
  }

  function isDead() {
    if (this.hp <= 0) {
      return true;
    } else {
      return false;
    }
  }

  function attack(roll, opponent) {
    if (roll >= opponent.armorClass) {
      if (roll === 20) {
        opponent.hp = (opponent.hp-2);
      } else {
        opponent.hp = (opponent.hp-1);
      }
      return true;
    } else {
      return false;
    }
  }

  function getModifierForAbilityScore(abilityScore) {
    if (abilityScore === 20) {
      return 5;
    }
    return -5;
  }

  return character;
};

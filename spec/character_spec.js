describe('Character', function() {

  beforeEach(function() {
    setFixtures('<div id="character"></div>');
  });

  when('it is created it', function() {
    var character;

    beforeEach(function() {
      character = Character();
    });

    it('has a name', function() {
      expect(character.name).toBe('Default Name');
    });

    it('can set a name', function() {
      expect(character.name).toBe('Default Name');

      var expectedName = 'Juan Dazey';
      character.name = expectedName;
      expect(character.name).toBe(expectedName);
    });

    it('has an alignment', function() {
      expect(character.alignment).toBe('Neutral');
    });

    it('can set alignment', function() {
      expect(character.alignment).toBe('Neutral');

      var expectedAlignment = "Good";
      character.setAlignment(expectedAlignment);
      expect(character.alignment).toBe(expectedAlignment);
    });

    it('cannot have an invalid alignment', function() {
      character.setAlignment('incorrect alignment');
      character.setAlignment('slothman');

      var expectedAlignment = 'Neutral';
      expect(character.alignment).toBe(expectedAlignment);
    });

    it('has an armor class with a default value', function() {
      expect(character.armorClass).toBe(10);
    });

    it('can set armor class', function() {
      expect(character.armorClass).toBe(10);

      var expectedArmorClass = 20;
      character.armorClass = expectedArmorClass;
      expect(character.armorClass).toBe(expectedArmorClass);
    });

    it('has hit points with a default value', function() {
      expect(character.hp).toBe(5);
    });

    it('can set hit points', function() {
      expect(character.hp).toBe(5);

      var expectedhp = 10;
      character.hp = expectedhp;
      expect(character.hp).toBe(expectedhp);
    });

    it('has strength', function() {
      expect(character.getStrength()).toBe(10);
    });

    it('has dexterity', function() {
      expect(character.getDexterity()).toBe(10);
    });

    it('has constitution', function() {
      expect(character.getConstitution()).toBe(10);
    });

    it('has wisdom', function() {
      expect(character.getWisdom()).toBe(10);
    });

    it('has intelligence', function() {
      expect(character.getIntelligence()).toBe(10);
    });

    it('has charisma', function() {
      expect(character.getCharisma()).toBe(10);
    });

    it('has a modifier for given ability score', function() {
      expect(character.getModifierForAbilityScore(1)).toBe(-5);
      expect(character.getModifierForAbilityScore(20)).toBe(5);
    });
  });

  when('combat is started', function() {
    var character;
    var characterTwo;

    beforeEach(function() {
      character = Character();
      characterTwo = Character();
    });

    it('can successfully attack another character with a lower armor class', function() {
      characterTwo.armorClass = 1;

      expect(character.attack(2, characterTwo)).toBe(true);
    });

    it('cannot successfully attack another character with a higher armor class', function() {
      characterTwo.armorClass = 50;

      expect(character.attack(2, characterTwo)).toBe(false);
    });

    it('can successfully attack another character with the same armor class', function () {
      characterTwo.armorClass = 10;

      expect(character.attack(10, characterTwo)).toBe(true);
    });

    it('can cause damage against another character when attack is successful', function() {
      characterTwo.armorClass = 10;

      expect(characterTwo.hp).toBe(5);
      character.attack(10, characterTwo);
      expect(characterTwo.hp).toBe(4);
    });

    it('cannot cause damage agains another character when attack is unsuccessful', function() {
      characterTwo.armorClass = 10;

      expect(characterTwo.hp).toBe(5);
      character.attack(9, characterTwo);
      expect(characterTwo.hp).toBe(5);
    });

    it('can deal a critical hit with a natural 20 roll', function() {
      characterTwo.armorClass = 10;

      expect(characterTwo.hp).toBe(5);
      character.attack(20, characterTwo);
      expect(characterTwo.hp).toBe(3);
    });

    it('can be dead when hp reaches 0', function() {
      characterTwo.armorClass = 10;
      characterTwo.hp = 2;

      character.attack(20, characterTwo);
      expect(characterTwo.hp).toBe(0);
      expect(characterTwo.isDead()).toBe(true);
    });

    it('is not dead when hp is above 0', function() {
      characterTwo.armorClass = 10;
      characterTwo.hp = 5;

      character.attack(20, characterTwo);
      expect(characterTwo.hp).toBe(3);
      expect(characterTwo.isDead()).toBe(false);
    });
  });
});

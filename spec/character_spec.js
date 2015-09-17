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
      expect(character.getName()).toBe('Default Name');
    });

    it('can set a name', function() {
      expect(character.getName()).toBe('Default Name');

      var expectedName = 'Juan Dazey';
      character.setName(expectedName);
      expect(character.getName()).toBe(expectedName);
    });

    it('has an alignment', function() {
      expect(character.getAlignment()).toBe('Neutral');
    });

    it('can set alignment', function() {
      expect(character.getAlignment()).toBe('Neutral');

      var expectedAlignment = "Good";
      character.setAlignment(expectedAlignment);
      expect(character.getAlignment()).toBe(expectedAlignment);
    });

    it('cannot have an invalid alignment', function() {
      character.setAlignment('incorrect alignment');
      character.setAlignment('slothman');

      var expectedAlignment = 'Neutral';
      expect(character.getAlignment()).toBe(expectedAlignment);
    });

    it('has an armor class with a default value', function() {
      expect(character.getArmorClass()).toBe(10);
    });

    it('can set armor class', function() {
      expect(character.getArmorClass()).toBe(10);

      var expectedArmorClass = 20;
      character.setArmorClass(expectedArmorClass);
      expect(character.getArmorClass()).toBe(expectedArmorClass);
    });

    it('has hit points with a default value', function() {
      expect(character.getHp()).toBe(5);
    });

    it('can set hit points', function() {
      expect(character.getHp()).toBe(5);

      var expectedHp = 10;
      character.setHp(expectedHp);
      expect(character.getHp()).toBe(expectedHp);
    });
  });

  when('combat is started', function() {
    var character;

    beforeEach(function() {
      character = Character();
    });

    it('can successfully attack another character with a lower armor class', function() {
      var characterTwo = Character();
      characterTwo.setArmorClass(1);

      expect(character.attack(2, characterTwo)).toBe(true);
    });

    it('cannot successfully attack another character with a higher armor class', function() {
      var characterTwo = Character();
      characterTwo.setArmorClass(50);

      expect(character.attack(2, characterTwo)).toBe(false);
    });
  });

});

class Creature
{
  constructor(attack, health)
  {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.id = Creature.count++;
  }
}
Creature.count = 0;

class CardGame
{
  constructor(damageStrategy)
  {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature)
  {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy
{
  damage(creature)
  {
    if (creature.health <= 0)
    {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    creature.health--;
    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy
{
  damage(creature)
  {
    if (GrowingDamageStrategy.impact[creature.id])
    {
      let dmg = ++GrowingDamageStrategy.impact[creature.id];
      creature.health -= dmg;
    }
    else
    {
      creature.health--;
      GrowingDamageStrategy.impact[creature.id] = 1;
    }

    super.damage(creature);
  }
}
GrowingDamageStrategy.impact = {};


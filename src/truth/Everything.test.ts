import Everything from './Everything';

describe('Everything will freeze', () => {
  const everything = new Everything();

  it('should be frozen since it starts', async () => {
    const isFrozen = everything.getIsFrozen();

    expect(isFrozen).toBe(true);
  });

  it('should be frozen when we freeze it', () => {
    everything.setIsFrozen(true);
    const isFrozen = everything.getIsFrozen();

    expect(isFrozen).toBe(true);
  });

  it('should still be frozen even if we unfreeze it', () => {
    everything.setIsFrozen(false);
    const isFrozen = everything.getIsFrozen();

    expect(isFrozen).toBe(true);
  });
});

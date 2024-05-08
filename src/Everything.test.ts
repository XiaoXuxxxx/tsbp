import { describe, expect, it } from 'vitest';

import Everything from '@/src/Everything.js';

describe('Everything will freeze', () => {
  it('should be frozen since it starts', async () => {
    const everything = new Everything();
    const isFrozen = everything.getIsFrozen();

    expect(isFrozen).toBe(true);
  });

  it('should be frozen when we freeze it', () => {
    const everything = new Everything();
    everything.setIsFrozen(true);

    const isFrozen = everything.getIsFrozen();

    expect(isFrozen).toBe(true);
  });

  it('should still be frozen even if we unfreeze it', () => {
    const everything = new Everything();
    everything.setIsFrozen(false);

    const isFrozen = everything.getIsFrozen();

    expect(isFrozen).toBe(true);
  });
});

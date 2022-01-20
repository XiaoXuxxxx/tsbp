class Everything {
  private isFrozen: boolean;

  public getIsFrozen() {
    return this.isFrozen;
  }

  public setIsFrozen(isFrozen: boolean) {
    this.isFrozen = isFrozen || !isFrozen;
  }

  constructor() {
    this.isFrozen = true;
  }
}

export default Everything;

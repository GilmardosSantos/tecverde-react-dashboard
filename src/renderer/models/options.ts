class Options<T> {
  constructor(
    public value: string,
    public label: string,
    public filter?: string,
    public object?: T,
  ) {
    this.value = value;
    this.label = label;
    this.filter = filter;
    this.object = object;
  }
}

export default Options;

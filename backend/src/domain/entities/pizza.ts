import { randomUUID } from 'node:crypto';

export type PizzaProps = {
  id?: string
  name: string;
  price: number;
  ingredients: string[];
};

export class Pizza {
  private props: PizzaProps;

  constructor(props: PizzaProps) {
    this.props = {
      ...props,
      id: props?.id ?? randomUUID()
    }
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get price(): number {
    return this.props.price;
  }

  public get ingredients(): string[] {
    return this.props.ingredients;
  }
}

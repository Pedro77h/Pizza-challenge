import { Injectable } from '@nestjs/common';
import { PizzaNotFound } from '@app/errors/pizzaNotFound.error';
import { Pizza } from '@domain/entities/pizza';
import { PizzaRepository } from '@domain/repositories/pizza.repository';
@Injectable()
export class RemovePizzas {
  constructor(private pizzaRepository: PizzaRepository) {}

  public async execute(pizzaId: string) {
    const pizza: Pizza = await this.pizzaRepository.findOneOrFail(pizzaId);

    if (!pizza) {
      throw new PizzaNotFound();
    }

    await this.pizzaRepository.remove(pizzaId);
  }
}

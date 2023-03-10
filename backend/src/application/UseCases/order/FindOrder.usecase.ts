import { OrderNotFound } from './../../errors/orderNotFound.error';
import { OrderRepository } from '@domain/repositories/order.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class FindOrder {
  constructor(private orderRepository: OrderRepository) {}

  async execute(orderId: string) {
    const order = await this.orderRepository.findOneOrFail(orderId);

    if (!order) throw new OrderNotFound();

    return { order };
  }
}

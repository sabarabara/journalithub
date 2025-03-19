export abstract class IGenericRepository<T> {
  abstract create(item: T): Promise<T>;
  abstract findAll: Promise<T[]>;
}

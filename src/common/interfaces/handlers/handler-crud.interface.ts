export interface IHandlerCRUD<T> {
  store(data: T)
  getAll(query?: Partial<T>)
  getById(id: string)
  update(id: string, data: Partial<T>)
  delete(id: string)
}

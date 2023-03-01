export interface RouterName {
  path: string
  name: string
}

/**
 * @description OBJETOS DE ROTAS, CONTÉM A FORMA DE IMPLEMENTAÇÃO DE ROTAS
 * @example [KEY-ROUTE]<{ path: string, name: string }>;
 *
 * */
export interface Routers {
  example: RouterName
  notFound: RouterName
}

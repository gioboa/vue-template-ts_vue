import type { ApiRouterInterface } from './model/api.interface'

export class ApiRouter {
  private readonly baseURL: string
  private readonly routerOrigin: string
  private readonly activedMock?: boolean
  private readonly baseMockURL?: string
  private readonly routerOriginMock?: string

  constructor(private setting: ApiRouterInterface) {
    this.baseURL = this.setting.baseURL
    this.routerOrigin = this.setting.routerOrigin
    this.activedMock = this.setting.activedMock
    this.baseMockURL = this.setting.baseMockURL
    this.routerOriginMock = this.setting.routerOriginMock
  }

  public get url(): string {
    if (this.usedModk()) {
      return `${this.baseMockURL}${this.routerOriginMock}`
    }

    return this.baseURL + this.routerOrigin
  }

  private usedModk(): boolean {
    return this.activedMock ? true : false
  }
}

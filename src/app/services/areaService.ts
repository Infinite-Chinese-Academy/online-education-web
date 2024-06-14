import { IResponse } from '@/app/model/api'
import { CountryResponse } from '@/app/model/country'
import { BaseApiService } from './baseApiService'

class AreaService extends BaseApiService {
  getAreas(): Promise<IResponse<CountryResponse>> {
    return this.get<IResponse<CountryResponse>>('/countries')
  }
}

const areaService = new AreaService()
export default areaService

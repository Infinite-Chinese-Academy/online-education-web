import { IResponse, Paginator } from '@/app/model/api'
import {
  AddCourseRequest,
  AddCourseResponse,
  ClassSchedule,
  CourseDetailResponse,
  CourseRequest,
  CourseResponse,
  CourseType,
  Schedule,
  ScheduleRequest,
  UpdateCourseRequest,
  UpdateCourseResponse,
} from '@/app/model/course'
import { StudentOwnCoursesResponse } from '@/app/model/student'
import { BaseApiService } from './baseApiService'

class CourseService extends BaseApiService {
  getCourses(params?: CourseRequest): Promise<IResponse<CourseResponse>> {
    return this.get('courses', params)
  }
  getStudentOwnCourses(
    params?: any
  ): Promise<IResponse<StudentOwnCoursesResponse>> {
    return this.get('courses', params)
  }
  getCourseById(id: string): Promise<IResponse<CourseDetailResponse>> {
    return this.get('courses/detail', { id: id })
  }
  updateCourse(
    req: UpdateCourseRequest
  ): Promise<IResponse<UpdateCourseResponse>> {
    return this.put<IResponse<UpdateCourseResponse>>('/courses', req).then(
      this.showMessage(true)
    )
  }
  getTypes(): Promise<IResponse<CourseType[]>> {
    return this.get('courses/type')
  }
  getCode(): Promise<IResponse<string>> {
    return this.get('courses/code')
  }
  addCourse(req: AddCourseRequest): Promise<IResponse<AddCourseResponse>> {
    return this.post<IResponse<AddCourseResponse>>('courses', req).then(
      this.showMessage(true)
    )
  }
  updateSchedule(req: ScheduleRequest): Promise<IResponse<boolean>> {
    return this.put<IResponse<boolean>>('courses/schedule', req).then(
      this.showMessage(true)
    )
  }
  getScheduleById(scheduleId: number): Promise<IResponse<Schedule>> {
    return this.get<IResponse<Schedule>>('courses/schedule', {
      scheduleId: scheduleId,
    })
  }
  getClassSchedule(userId: number): Promise<IResponse<ClassSchedule[]>> {
    return this.get<IResponse<ClassSchedule[]>>('class/schedule', {
      userId: userId,
    })
  }
}

const courseService = new CourseService()
export default courseService

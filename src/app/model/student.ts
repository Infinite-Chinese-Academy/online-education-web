import { ListResponse } from './api'
import { Course, StudentCourse } from './course'
import { StudentCourseDetailStatistic } from './statistics'
export interface StudentType {
  id: number
  name: string
}

export interface Student<T = Course> {
  id: number
  name: string
  updatedAt: string
  country: string
  createdAt: string
  email: string
  courses: T[]
  profileId: number
  type: StudentType
}

export interface StudentResponse extends ListResponse {
  students: Student[]
}

export interface AddStudentRequest {
  name: string
  country: string
  email: string
  type: number
}

export type AddStudentResponse = Student
export type UpdateStudentResponse = Student

export interface UpdateStudentRequest extends AddStudentRequest {
  id: number
}

export interface StudentProfile extends Student<StudentCourse> {
  address: string | null
  phone: number
  gender: number
  education: string
  age: number
  interest: string[]
  avatar: string
  memberStartAt: string
  memberEndAt: string
  description: string
}

export type StudentOwnCourse = StudentCourseDetailStatistic

export interface StudentOwnCoursesResponse extends ListResponse {
  courses: StudentOwnCourse[]
}

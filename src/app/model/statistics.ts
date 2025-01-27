import { Course } from './course'

export interface BasicStatistics {
  total: number
  lastMonthAdded: number
}

export interface GenderStatistics {
  gender: {
    male: number
    female: number
    unknown: number
  }
}

export interface StatisticOverviewResponse {
  course: BasicStatistics
  student: BasicStatistics & GenderStatistics
  teacher: BasicStatistics & GenderStatistics
}

export interface Statistic {
  name: string
  amount: number
}

export interface StatisticStudentResponse {
  country: Statistic[]
  type: Statistic[]
  courses: Statistic[]
  createdAt: Statistic[]
  interest: Statistic[]
}

export interface SkillStatistic extends Statistic {
  level: number
}

export interface StatisticTeacherResponse {
  country: Statistic[]
  createdAt: Statistic[]
  skills: {
    [key: string]: SkillStatistic[]
  }
  workExperience: string[]
}
interface CourseStatistic {
  classTime: string[]
  typeName: string
  name: string
}

export interface ClassTimeStatistic extends Statistic {
  courses: CourseStatistic[]
}

export interface StatisticCourseResponse {
  createdAt: Statistic[]
  type: Statistic[]
  classTime: ClassTimeStatistic[]
}

export interface StudentCourseDetailStatistic {
  createdAt: string
  updatedAt: string
  id: number
  courseDate: string
  studentId: number
  course: Course
}

export interface StudentCourseStatistic {
  name: string
  amount: number
  courses: StudentCourseDetailStatistic[]
}

export interface StudentRecommendCourseStatistic {
  name: string
  amount: number
  courses: Course[]
}

export interface StudentStatistic {
  own: StudentCourseStatistic
  recommend: StudentRecommendCourseStatistic
}

export type StudentStatisticResponse = StudentStatistic

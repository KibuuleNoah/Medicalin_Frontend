// Centralized application types

export const UserRole = {
  GUARDIAN: "guardian",
  INSTITUTION: "institution",
  PHYSICIAN: "physician",
  EMERGENCY: "emergency",
} as const

export type UserRole = typeof UserRole[keyof typeof UserRole]

export const ReportType = {
  INCIDENT: "incident",
  CHECKUP: "checkup",
  DIAGNOSIS: "diagnosis",
  PRESCRIPTION: "prescription",
} as const

export type ReportType = typeof ReportType[keyof typeof ReportType]

export interface MedicalReport {
  id: string
  studentId: string
  authorId: string
  authorName: string
  authorRole: UserRole
  date: string
  type: ReportType
  title: string
  content: string
  critical?: boolean
  prescriptions?: string[]
  vitals?: {
    height?: string
    weight?: string
    bloodPressure?: string
    temp?: string
  }
}

export interface Student {
  id: string
  name: string
  dob: string
  bloodType: string
  allergies: string[]
  conditions: string[]
  guardianId: string
  currentInstitutionId: string
  authorizedInstitutions: string[]
}

export interface Institution {
  id: string
  name: string
  type: "school" | "hospital"
  location: string
}

export interface HealthContext {
  students: Student[]
  reports: MedicalReport[]
  institutions: Institution[]
  currentUserRole: UserRole
  currentUserId: string
}

export interface NavMainItem {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
}
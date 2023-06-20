/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeLater = any;

export interface TutorInformation {
  id_teacher: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  gender: number;
  address: string | null;
  description: string;
  experience_year?: number;
  fee: number;
  request: number;
  total_comments: number;
  rate?: string;
  comments_avg_star?: string;
  comments: FixMeLater[];
}

export interface StudentDetails {
  id_student: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string | null;
  description: string;
  academic_level?: number;
}
export interface CommentInformation {
  id: number;
  id_student: number;
  id_teacher: number;
  comment: string;
  star: number;
}

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignInResponse = {
  data: string;
};

export type RequestError = {
  error: string;
  message: string;
  statusCode: number;
};

export type  CoursesListResponse ={
    data:Data[]
  
  
 
}
export type Data = {
  completed_lessons_count: number;
  duration: number;
  _id: string;
  name: string;
  short_description:string;
  icon: string;
  lessons_count: string;
  is_enrolled: boolean;
  enrolled_count:number;
}



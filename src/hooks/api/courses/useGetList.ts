import { axiosInstance } from "@/api/axios"
import { CoursesListResponse, RequestError } from "@/api/types"
import { COURESS } from "@/api/urls"
import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

export const useGetList =()=>{
    const getListRequest = async() =>
        axiosInstance.get<CoursesListResponse>(COURESS);
    return  useQuery<
    AxiosResponse<CoursesListResponse>,
    AxiosError<RequestError>
    >({
        queryKey: ['courses-list'],
        queryFn: getListRequest,
        enabled: true

    })
 
   
  
}
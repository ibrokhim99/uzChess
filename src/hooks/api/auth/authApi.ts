import { RequestError, SignInPayload, SignInResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import { SIGN_IN } from "@/api/urls";
import { axiosInstance } from "@/api/axios";
import { ACCESS_TOKEN_KEY } from "@/lib/constants";
import { BASE_ROUTE } from "@/router/routes";
import { useToast } from "@/components/ui/use-toast";

export const useApiSignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const signInRequest = async (
    payload: SignInPayload
  ): Promise<AxiosResponse<SignInResponse>> =>
    axiosInstance.post(SIGN_IN, payload);

  return useMutation<
    AxiosResponse<SignInResponse>,
    AxiosError<RequestError>,
    SignInPayload
  >({
    mutationKey: ["sign-in"],
    mutationFn: signInRequest,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (data, _variables, _context) => {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.data.data}`;
      localStorage.setItem(ACCESS_TOKEN_KEY, data.data.data);

      // show success message
      toast({
      
        title: "Successful",
        description: "Welcome to UzChess ",
        
      });

      navigate(BASE_ROUTE);
    },
  });
};

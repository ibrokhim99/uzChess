import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useApiSignIn } from "@/hooks/api/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LOGIN_ROUTE } from "@/router/routes";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(10, "Email should be at least 10 characters long")
    .email(),
  password: z
    .string()
    .trim()
    .min(6, "Password should be at least 6 characters long"),
});

type LoginFieldsValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { mutate, error, isError, isPending } = useApiSignIn();

  const form = useForm<LoginFieldsValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFieldsValues) => {
    mutate(values);
  };

  return (
    <div className="bg-background min-h-screen w-full flex items-center justify-center">
      <Card className="w-[381px]">
        <Form {...form}>
          <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Welcome to UzChess Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              {isError && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    {error.response?.data.message}
                  </AlertDescription>
                </Alert>
              )}
              <FormField
                key="email"
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-[16px]">
                    <FormLabel className="text-[14px] font-medium leading-[20px]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="name@mail.com" />
                    </FormControl>
                    <FormMessage className="text-[12px] leading-[16px] font-normal" />
                  </FormItem>
                )}
              />

              <FormField
                key="password"
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-[16px]">
                    <FormLabel className="text-[14px] font-medium leading-[20px]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage className="text-[12px] leading-[16px] font-normal" />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

LoginPage.path = LOGIN_ROUTE;

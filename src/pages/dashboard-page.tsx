import { BASE_ROUTE } from "@/router/routes";

export default function DashboardPage() {
  return (
    <>
    <p className="text-[12px]  leading-[20px] px-5">
      Bosh Sahifa
    </p>
    <h1 className=" text-[16px] font-small leading-[20px]  px-5 ">
      Home Page
    </h1>
    </>
  );
}

DashboardPage.path = BASE_ROUTE;

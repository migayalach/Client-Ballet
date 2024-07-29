import React, { useEffect } from "react";
import { Result } from "antd";
import { useRouter } from "next/navigation";

function Page404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sientimos mucho la pagina que busca no existe!"
    />
  );
}

export default Page404;

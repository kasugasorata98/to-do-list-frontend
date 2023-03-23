import { ApiService } from "@/api";
import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Callback = () => {
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    if (!router.isReady) return;
    const code = router.query.code as string;
    ApiService.authorize(code, "http://localhost:3000/callback")
      .then(({ data }) => {
        LocalStorageHandler.setUserToken(data.access_token, data.refresh_token);
        router.push("/home");
      })
      .catch((err) => {
        toast({
          title: err.response.data.message.error,
        });
      });
  }, [router.isReady]);

  return <></>;
};

export default Callback;

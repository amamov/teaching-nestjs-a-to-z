import AppLayout from "components/layouts/AppLayout";
import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AppLayout>
      {id} doc google docs 본체 만약 비공개라면 비번 입력하는 창 나오기
    </AppLayout>
  );
};

export default Doc;

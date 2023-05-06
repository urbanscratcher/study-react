import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a req to the back API
  // to fetch the news item with newId

  return (
    <>
      <h1>DetailPage - {newsId}</h1>
    </>
  );
}

export default DetailPage;

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params = [] }) {
  const [title, id] = params || [];
  const router = useRouter();
  const { query } = router;
  const { poster_path, overview } = query;

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
      {poster_path && (
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      )}
      {overview && <p>{overview}</p>}
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

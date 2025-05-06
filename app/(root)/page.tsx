import SearchForm from "../../components/SearchForm";

export default function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query ?? "";
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch your startup,
        <br />
        connect with entrepreneurs
      </h1>
      <p className="sub-heading">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <SearchForm query={query} />
    </section>
  );
}

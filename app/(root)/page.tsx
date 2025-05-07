import StartUpCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result of "${query}` : `All Startups`}
        </p>
        <ul className="mt-7  card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => {
              return <StartUpCard key={post?._id} post={post} />;
            })
          ) : (
            <p className="no-results"> No Startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}

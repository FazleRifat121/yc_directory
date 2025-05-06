import StartUpCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query ?? "";

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Elon",
      },
      description: "this is a description",
      category: "Robots",
      title: "We Robots",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx5ZFWDHQo7hnTQYa0LKTQuoEDwqryttKmQ&s",
    },
  ];
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
            posts.map((post: StartupCardType) => {
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

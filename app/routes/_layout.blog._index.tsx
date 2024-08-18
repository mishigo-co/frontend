import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Mishigo Co | Blog" },
    { name: "description", content: "Welcome to Mishigo Co. blog page" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="font-sans p-4">
        <h1 className="text-3xl">Blog</h1>
      </div>
    </>
  );
}

import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Mishigo Co | About" },
    { name: "description", content: "About page" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="font-sans p-4">
        <h1 className="text-3xl">About Us</h1>
      </div>
    </>
  );
}

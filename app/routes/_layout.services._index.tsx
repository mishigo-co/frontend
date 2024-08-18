import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mishigo Co | Services" },
    { name: "description", content: "Welcome to Mishigo Co. services page" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="font-sans p-4">
        <h1 className="text-3xl">Mishigo Co. Services</h1>
      </div>
    </>
  );
}

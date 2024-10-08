import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "Mishigo Co" },
    { name: "description", content: "Welcome to Mishigo Co." },
  ];
};

export default function Index() {
  return (
    <>
      <div className="font-sans p-4">
        <h1 className="text-3xl">Welcome to Remix (SPA Mode)</h1>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/guides/spa-mode"
              rel="noreferrer"
            >
              SPA Mode Guide
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
            >
              Remix Docs
            </a>
          </li>
          <li>
            <Link
              to="contact"
              className="text-blue-700 underline visited:text-purple-900"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

"use client";

import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="max-w-md mx-auto p-4 bg-dark-1 shadow-md rounded-md mt-24">
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const queryTerm = formData.get("search") as string;
      router.push(pathname + "?search=" + queryTerm);
    }}
    className="flex items-center space-x-2"
  >
    <label htmlFor="search" className="sr-only">Search for Users</label>
    <input
      id="search"
      name="search"
      type="text"
      placeholder="Search for Users"
      className="flex-1 py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
    />
    <button
      type="submit"
      className="py-2 px-4 bg-blue-900 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      Search
    </button>
  </form>
</div>

  );
};






import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query
    ? (await clerkClient.users.getUserList({ query })).data
    : [];

  return (
    <div className="">
      <div className="flex justify-center mt-6 mb-6">
        <h1 className="font-bold text-3xl md:text-5xl underline underline-offset-8 decoration-gray-500">
          Admin Dashboard
        </h1>
      </div>

      {/* <hr /> */}

      <SearchUsers />

      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="border border-gray-700 rounded-md p-4 mb-4 shadow-md bg-gray-900 text-white w-3/4 mx-auto"
          >
            <div className="mb-4">
              <p className="text-lg font-semibold">
                User: {user.firstName} {user.lastName}
              </p>
              <p className="mt-2">
                Email:{" "}
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </p>
            </div>
            <div className="mb-4">
              <p className="uppercase">
                {user.publicMetadata.role as string}
              </p>
            </div>
            <div className="flex justify-between">
              <form action={setRole} className="flex items-center">
                <input type="hidden" value={user.id} name="id" />
                <input type="hidden" value="admin" name="role" />
                <Button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                      
                      
                      Make Admin
                    
                  </Button>
                </form>
                {/* <AlertDialog>
                  <AlertDialogTrigger>
                   
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Do you want to make this user an Admin?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Yes</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog> */}
              {/* <form action={setRole} className="flex items-center">
      <input type="hidden" value={user.id} name="id" />
      <input type="hidden" value="moderator" name="role" />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
      >
        Make Moderator
      </button>
    </form> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

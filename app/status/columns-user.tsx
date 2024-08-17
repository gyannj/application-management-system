"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IApplicationDocument } from "@/mongodb/models/application";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";

export type CustomColumnDef<T> = ColumnDef<T> & {
  isAdmin?: boolean;
};

export const columnsuser: CustomColumnDef<IApplicationDocument>[] = [
  {
    accessorKey: "applicationId",
    header: "Application ID",
  },
  {
    accessorKey: "user.firstName",
    header: "Name",
    cell: ({ row }) => row.original.user?.firstName,
  },
  {
    accessorKey: "user.email",
    header: "Email",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const [isExpanded, setIsExpanded] = useState(false);
      const description = row.getValue("description") as string;

      return (
        <div>
          <div
            style={{
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: isExpanded ? 'normal' : 'nowrap',
              maxWidth: '200px', // Adjust width as needed
            }}
          >
            {description}
          </div>
          {description.length > 100 && ( // Adjust length as needed
            <Button
              variant="link"
              className={`mt-2 text-blue-600 hover:underline transition-all duration-300 ${
                isExpanded ? 'text-blue-800' : ''
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </Button>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Submitted On
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const newdate = new Date(row.getValue("createdAt"));
      const formatted = newdate.toLocaleDateString('en-GB');
      return <div className="text-center mr-3 font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user?.applicationId)}
            >
              Copy Application ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Application</DropdownMenuItem>
            <DropdownMenuItem>View Messages</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

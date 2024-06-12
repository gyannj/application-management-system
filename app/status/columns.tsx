"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IApplicationDocument } from "@/mongodb/models/application"
// export type  = {
//     name: string
//     date: string
//     email: string
//     title: string
//     status: string
//     id: string
// }

export const columns: ColumnDef<IApplicationDocument>[] = [
    {
        accessorKey: "applicationId",
        header: "Application ID",
      },
  {
    accessorKey: "user.firstName",
    header: "Name",
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
  },
  {
    accessorKey: "createdAt",
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Submitted On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  cell: ({ row }) => {
    const newdate = new Date(row.getValue("createdAt"))
    const formatted = newdate.toLocaleDateString('en-GB')

    return <div className="text-center mr-3 font-medium">{formatted}</div>
  }
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
 
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
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy Application ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Application</DropdownMenuItem>
            <DropdownMenuItem>View Messages</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
},
]

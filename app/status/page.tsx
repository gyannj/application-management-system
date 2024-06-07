import { Users, columns } from "./columns"
import { DataTable } from "@/components/mycomponents/data-table"

async function getUsers(): Promise<Users[]> {
//  const res = await fetch("https://665c100e3e4ac90a04d89336.mockapi.io/api/users/:users")
//  const data = await res.json();
 return [
    {
      date: "2024-06-01T08:18:51.450Z",
      name: "Jan Cremin",
      email: "Kamryn_Murazik77@yahoo.com",
      title: "payment",
      status: "8",
      id: "1"
    },
    {
      date: "2024-06-01T22:42:47.820Z",
      name: "Percy Armstrong",
      email: "Concepcion63@hotmail.com",
      title: "plus",
      status: "9",
      id: "2"
    },
    {
      date: "2024-06-01T10:44:53.942Z",
      name: "Mrs. Cynthia Tromp",
      email: "Casimer69@hotmail.com",
      title: "Avon",
      status: "7",
      id: "3"
    },
    {
      date: "2024-06-02T01:00:22.264Z",
      name: "Pablo Volkman",
      email: "Katarina.Schultz@gmail.com",
      title: "Nobelium",
      status: "7",
      id: "4"
    },
    {
      date: "2024-06-02T04:44:13.229Z",
      name: "Jay Toy",
      email: "Maximo_Upton@gmail.com",
      title: "oxidize black",
      status: "2",
      id: "5"
    },
    {
      date: "2024-06-02T05:41:58.737Z",
      name: "Horace Corwin",
      email: "Misty56@hotmail.com",
      title: "Hatchback",
      status: "9",
      id: "6"
    },
    {
      date: "2024-06-01T21:11:51.764Z",
      name: "Stella Cronin",
      email: "Larue59@yahoo.com",
      title: "urban West Robust",
      status: "1",
      id: "7"
    },
    {
      date: "2024-06-01T10:09:44.009Z",
      name: "Kathryn McLaughlin",
      email: "Jalen_Towne@gmail.com",
      title: "transparent panel",
      status: "5",
      id: "8"
    },
    {
      date: "2024-06-02T03:12:15.361Z",
      name: "Ms. Caleb Hoppe DVM",
      email: "Tiara.Leannon@gmail.com",
      title: "Granite Dollar",
      status: "4",
      id: "9"
    },
    {
      date: "2024-06-02T00:48:28.884Z",
      name: "Melody Wunsch Sr.",
      email: "Maureen_Mueller2@gmail.com",
      title: "Hybrid Personal",
      status: "7",
      id: "10"
    },
    {
      date: "2024-06-02T04:14:52.360Z",
      name: "Delbert Gerlach",
      email: "Jazmin37@hotmail.com",
      title: "process",
      status: "6",
      id: "11"
    },
    {
      date: "2024-06-02T03:10:57.311Z",
      name: "Julian Pagac",
      email: "Stewart1@yahoo.com",
      title: "Direct",
      status: "5",
      id: "12"
    },
    {
      date: "2024-06-02T05:35:53.375Z",
      name: "Ms. Rene Kunde",
      email: "Jakob25@hotmail.com",
      title: "lout",
      status: "7",
      id: "13"
    },
    {
      date: "2024-06-01T18:55:08.402Z",
      name: "Jerry Jacobs",
      email: "Adolph.Price@yahoo.com",
      title: "synthesize redundant Rustic",
      status: "6",
      id: "14"
    },
    {
      date: "2024-06-01T12:31:41.869Z",
      name: "Guadalupe Pouros MD",
      email: "Brenda5@gmail.com",
      title: "Blues East",
      status: "2",
      id: "15"
    },
    {
      date: "2024-06-01T12:17:48.671Z",
      name: "Alicia Murphy",
      email: "Assunta_Walter94@hotmail.com",
      title: "so Home",
      status: "5",
      id: "16"
    },
    {
      date: "2024-06-01T17:41:43.377Z",
      name: "Marlon Nader",
      email: "Daniella42@yahoo.com",
      title: "Screen aha evolve",
      status: "3",
      id: "17"
    },
    {
      date: "2024-06-01T11:32:35.722Z",
      name: "Kristin Pouros",
      email: "Giuseppe_Leannon48@yahoo.com",
      title: "Cambridgeshire CLI Representative",
      status: "9",
      id: "18"
    },
    {
      date: "2024-06-01T19:04:00.447Z",
      name: "Lloyd Gerlach",
      email: "Kieran.Koss93@yahoo.com",
      title: "quod Table Fantastic",
      status: "9",
      id: "19"
    },
    {
      date: "2024-06-01T18:54:47.696Z",
      name: "Mrs. Saul Hills",
      email: "Durward_Rutherford32@yahoo.com",
      title: "Antimony Berkelium",
      status: "6",
      id: "20"
    },
    {
      date: "2024-06-01T11:31:15.098Z",
      name: "Ms. Alyssa Ratke",
      email: "Shania_Robel76@hotmail.com",
      title: "model Tennessee Manager",
      status: "6",
      id: "21"
    },
    {
      date: "2024-06-01T12:42:02.001Z",
      name: "Trevor Schaden",
      email: "Brenda64@yahoo.com",
      title: "eager Fresh",
      status: "8",
      id: "22"
    },
    {
      date: "2024-06-01T10:55:36.737Z",
      name: "Katrina Ernser",
      email: "Andre_Gutmann@yahoo.com",
      title: "red",
      status: "1",
      id: "23"
    },
    {
      date: "2024-06-01T13:52:01.072Z",
      name: "Patsy Prosacco",
      email: "Freida58@yahoo.com",
      title: "psst",
      status: "7",
      id: "24"
    },
    {
      date: "2024-06-02T04:37:03.526Z",
      name: "Wilbur Moen",
      email: "Josiah95@hotmail.com",
      title: "Diesel Country",
      status: "4",
      id: "25"
    },
    {
      date: "2024-06-01T22:50:59.849Z",
      name: "Mitchell Morar",
      email: "Zelma.Rice97@gmail.com",
      title: "calculating",
      status: "5",
      id: "26"
    },
    {
      date: "2024-06-02T02:34:33.519Z",
      name: "Bradley Leuschke",
      email: "Evalyn_Corkery@gmail.com",
      title: "Paradigm International",
      status: "9",
      id: "27"
    },
    {
      date: "2024-06-01T09:37:21.681Z",
      name: "Cindy Emard MD",
      email: "Vince_Larson58@hotmail.com",
      title: "Account",
      status: "9",
      id: "28"
    },
    {
      date: "2024-06-01T21:48:59.081Z",
      name: "Harry Halvorson",
      email: "Maida87@yahoo.com",
      title: "likewise",
      status: "7",
      id: "29"
    },
    {
      date: "2024-06-01T08:20:14.178Z",
      name: "Alton Pouros V",
      email: "Elizabeth98@gmail.com",
      title: "than",
      status: "7",
      id: "30"
    },
    {
      date: "2024-06-02T06:31:22.269Z",
      name: "Miss Yvette Dooley",
      email: "Melissa38@yahoo.com",
      title: "seldom",
      status: "3",
      id: "31"
    },
    {
      date: "2024-06-01T12:41:06.010Z",
      name: "Miss Sabrina Bechtelar",
      email: "Edd_Murphy1@hotmail.com",
      title: "array Computers Checking",
      status: "4",
      id: "32"
    },
    {
      date: "2024-06-01T09:50:09.706Z",
      name: "Beverly Homenick",
      email: "Odessa24@hotmail.com",
      title: "East",
      status: "5",
      id: "33"
    },
    {
      date: "2024-06-01T12:04:58.687Z",
      name: "Leslie Rice",
      email: "Aurore_Ondricka66@yahoo.com",
      title: "UTF8 put",
      status: "5",
      id: "34"
    },
    {
      date: "2024-06-01T13:16:25.072Z",
      name: "Beulah Farrell",
      email: "Katrina_Wilderman47@yahoo.com",
      title: "corporis",
      status: "4",
      id: "35"
    },
    {
      date: "2024-06-01T22:01:30.366Z",
      name: "Luis Wolff DDS",
      email: "Edgar_Runolfsdottir@hotmail.com",
      title: "Southeast",
      status: "8",
      id: "36"
    },
    {
      date: "2024-06-01T12:19:45.280Z",
      name: "Cecelia Huels",
      email: "Victoria.Brekke21@hotmail.com",
      title: "Optimization brr given",
      status: "4",
      id: "37"
    },
    {
      date: "2024-06-01T16:34:47.371Z",
      name: "Mr. Julian Waters",
      email: "Vincent_Huels31@yahoo.com",
      title: "Borders Dearborn",
      status: "2",
      id: "38"
    },
    {
      date: "2024-06-01T16:29:46.704Z",
      name: "Alejandro Greenholt",
      email: "Zoie_Aufderhar@hotmail.com",
      title: "array Dakota",
      status: "2",
      id: "39"
    },
    {
      date: "2024-06-01T20:34:07.649Z",
      name: "Manuel Berge",
      email: "Zachariah84@yahoo.com",
      title: "through lab Southeast",
      status: "2",
      id: "40"
    },
    {
      date: "2024-06-01T15:55:20.023Z",
      name: "Miss Sandra Littel",
      email: "Nels_Mante97@yahoo.com",
      title: "District Branding",
      status: "3",
      id: "41"
    },
    {
      date: "2024-06-01T23:07:58.562Z",
      name: "Meghan Halvorson",
      email: "Reginald27@hotmail.com",
      title: "world Plastic Southwest",
      status: "7",
      id: "42"
    },
    {
      date: "2024-06-01T13:54:46.943Z",
      name: "Mr. Myrtle Stiedemann",
      email: "Dena15@gmail.com",
      title: "Gasoline pascal Southwest",
      status: "5",
      id: "43"
    },
    {
      date: "2024-06-02T04:41:03.158Z",
      name: "Vickie Parker",
      email: "Rickie.Larkin67@yahoo.com",
      title: "voluptate provided",
      status: "9",
      id: "44"
    },
    {
      date: "2024-06-02T03:19:13.851Z",
      name: "Miss Eddie Hermiston",
      email: "Lonie_Champlin44@gmail.com",
      title: "Congolese",
      status: "4",
      id: "45"
    },
    {
      date: "2024-06-01T13:01:35.754Z",
      name: "April Mitchell PhD",
      email: "Raegan_Hudson@hotmail.com",
      title: "Dollar",
      status: "3",
      id: "46"
    },
    {
      date: "2024-06-02T06:26:24.372Z",
      name: "Rudy Prohaska",
      email: "Warren77@yahoo.com",
      title: "system killer which",
      status: "9",
      id: "47"
    },
    {
      date: "2024-06-02T05:39:28.235Z",
      name: "Jesus Corkery",
      email: "Johathan7@hotmail.com",
      title: "Agent motionless engine",
      status: "7",
      id: "48"
    },
    {
      date: "2024-06-02T03:15:52.074Z",
      name: "Sergio Gorczany",
      email: "Emmy.McLaughlin42@yahoo.com",
      title: "Assistant Gasoline",
      status: "1",
      id: "49"
    },
    {
      date: "2024-06-02T01:14:48.939Z",
      name: "Pete Krajcik",
      email: "Hailey6@gmail.com",
      title: "North connecting Consultant",
      status: "2",
      id: "50"
    }
  ];
}

export default async function Page() {
  const data = await getUsers()
    // console.log(data)
  return (
    <section className="py-24">
        <div className="container">
           <h1 className="mb-6 text-3xl font-bold">All Applications</h1>
            <DataTable columns={columns} data={data} />
        </div>

    </section>

  )
}
